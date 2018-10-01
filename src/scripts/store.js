import Backbone from 'backbone'
import { ItemCollection } from './models/itemModel'
import { User } from './models/userModel'

const STORE = Object.assign({}, Backbone.Events, {

  data: {
    ItemCollection: new ItemCollection(),
    userCollection: new User(),
    userLoginStatus: 'Log In',
    postingBikeURL: null
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
