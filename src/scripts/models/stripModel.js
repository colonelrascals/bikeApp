import Backbone from 'backbone' // Import statement allows me to import the backbone library from another file

var CLIENT_ID = 'ca_AQrrObbvUvoFW4DZh4CmP3xTgX4tS2vY'
export const StripeCollection = Backbone.Collection.extend({
  model: StripeModel,
  url: 'https://connect.stripe.com/oauth/authorize'

})

export const StripeModel = Backbone.Model.extend({
  url_root: 'https://connect.stripe.com/oauth/authorize',
  response_type: 'code',
  client_id: CLIENT_ID,
  scope: 'read_write'

})
