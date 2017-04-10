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
module.exports = stripeRouter
