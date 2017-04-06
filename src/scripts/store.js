import Backbone from 'backbone'
import { ItemCollection } from './models/itemModel'
import { UserCollection } from './models/userModel'

const STORE = Object.assign({}, Backbone.Events, {

  data: {
    items: new ItemCollection(),
    userCollection: new UserCollection(),
    userLoginStatus: 'Log In'
  },

  get: function (prop) {
    if (this.data.items === undefined) {
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
