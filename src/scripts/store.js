import Backbone from 'backbone'
import { ItemCollection, ItemModel } from './models/itemModel'
import { UserCollection } from './models/userModel'
import { StripeModel, StripeCollection } from './models/stripModel'

const STORE = Object.assign({}, Backbone.Events, {

  data: {
    ItemCollection: new ItemCollection(),
    userCollection: new UserCollection(),
    stripeLoading: true,
    stripeLoadingError: false,
    submitDisabled: false,
    paymentError: null,
    paymentComplete: false,
    token: null,
    userLoginStatus: 'Log In'
  },

  get: function (prop) {
    if (this.data.ItemCollection === undefined) {
      throw new Error('the store does not have a property called: ', +prop)
    }
    return this.data[prop]
  },

  set: function (attrs) {
    this.data = Object.assign(this.data, attrs)
    this.trigger('dataUpdated')
  }

})

export default STORE
