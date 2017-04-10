const Router = require('express').Router,
  stripeRouter = Router(),
  secret = require('../config/secrets.js').client_secret,
  request = require('request'),
  User = require('../db/schema.js').User

stripeRouter.get('/code', function (req, res) {
  var code = req.query.code
  if (code) {
    var data = {
        code: code,
        client_secret: secret,
        client_id: 'ca_AQrrObbvUvoFW4DZh4CmP3xTgX4tS2vY',
        grant_type: 'authorization_code'
      },
      url = 'https://connect.stripe.com/oauth/token'
    request.post({
      url: url,
      form: data
    }, function (stripeErr, stripeResp, stripeBody) {
      if (stripeErr) {
        console.log(stripeErr)
      } else {
        // findbyIDandUpdate user model (user obj is stored on req.user, which has property ._id)
        console.log(stripeBody)
        let StripeBody = JSON.parse(stripeBody)
        User.findByIdAndUpdate(req.user._id, StripeBody, {new: true}, function (err, record) {
          console.log(err, record)
          res.redirect('/#item')
        })
      }
    })
  }
  if (req.query.error) {
    console.log(req.query.error_description)
    res.json({
      error: req.query.error_description
    })
  }
})
stripeRouter.post('/charge', function (req, res) {
  var TOKEN = req.body.token // Stripe charge token
  var CENTS_PRICE = req.body.price // Stripe price in cents
  var CONNECTED_ID = req.body.stripeId // Stripe Connect platform user ID
  var APP_FEE = req.body.storegrafiFee

  var charge = stripe.charges.create({
    amount: CENTS_PRICE, // amount in cents, again
    currency: 'usd',
    source: TOKEN,
    description: 'Storegrafi order',
    application_fee: APP_FEE // Platform fee in cents (2%)
  }, {stripe_account: CONNECTED_ID},

    function (err, charge) {
      if (err && err.type === 'StripeCardError') {
        console.log('HERE IS THE STRIPE ERROR>>>', err)
        res.send(err)
      }

      console.log('HERE IS THE STRIPE CHARGE>>>', charge)
      res.json(charge)
    }
  )
})

module.exports = stripeRouter
