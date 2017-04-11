const stripe = require('stripe')(
    'sk_test_B7TsYERO2od3Zwa9hLagSmUA'
  )

var token = { id: 'tok_1A7VATCpQ07pw6RLxrqES7b6',
  object: 'token',
  card:
  { id: 'card_1A7VATCpQ07pw6RLadGAoKi3',
    object: 'card',
    address_city: 'Houston',
    address_country: 'United States',
    address_line1: '3906 Swarthmore St',
    address_line1_check: 'pass',
    address_line2: null,
    address_state: 'TX',
    address_zip: '77005',
    address_zip_check: 'pass',
    brand: 'Visa',
    country: 'US',
    cvc_check: 'pass',
    dynamic_last4: null,
    exp_month: 2,
    exp_year: 2042,
    funding: 'credit',
    last4: '4242',
    metadata: {},
    name: 'Patrick Tinkoff Hildreth',
    tokenization_method: null },
  client_ip: '73.77.2.174',
  created: 1491940849,
  email: 'john@john.com',
  livemode: false,
  type: 'card',
  used: false }

console.log('creating charge')

console.log(token)

console.log('\n\n\n\n\nXXXXXX\n\n\n\n\n\n\n')
stripe.charges.create({
  amount: 500, // amount in cents, again
  currency: 'usd',
  source: token.id,
  description: 'Storegrafi order'
},
  function (err, charge) {
    if (err) {
      console.log(err)
    } else {
      console.log(charge)
    }
  }
)

console.log('charged')
