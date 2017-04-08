import React from 'react'
import STORE from './store'
import User from './models/userModel'
import Backbone from 'backbone'
import { ItemModel, ItemCollection } from './models/itemModel'
import { StripeCollection } from './models/stripModel'
import $ from 'jquery'

const ACTIONS = {
  loginUser (email, password) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      User.login(email, password)
      .done(
        function (response) {
          console.log('login success', response)
          location.hash = 'home'
        }
        )
      .fail(
        function (error) {
          console.log('login fail', error)
        }
        )
    } else {
      document.querySelector('.loginEmailRejection').innerHTML = ' Invalid email address'
    }
  },
  registerUser (formData) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      User.register(formData)
      .done(
        function (response) {
          console.log('register success', response)
          ACTIONS.loginUser(formData.email, formData.password)
        }
        )
      .fail(
        function (error) {
          console.log('register fail', error)
        }
        )
    } else {
      console.log('bad email')
      document.querySelector('.registerEmailRejection').innerHTML = 'Invalid email address'
    }
  },
  addListing (itemData) {
    var newItem = new ItemModel(itemData)

    newItem.save()
      .then(
        (response) => {
          console.log(response)
          ACTION.fetchAllItems()
        },
        (err) => {
          alert('problem saving your product')
        }
      )
  },
  fetchAllItems () {
    var itemColl = STORE.get('ItemCollection')
    itemColl.fetch()
      .then(function () {
        STORE.set({
          ItemCollection: itemColl
        })
      })
  },

  loggedInStatus: function () {
    console.log(User.getCurrentUser())
    if (User.getCurrentUser() != null) {
      STORE.set({userLoginStatus: 'Log Out'})
      console.log(STORE.data.userLoginStatus)

      return 'Log Out'
    } else {
      STORE.set({userLoginStatus: 'Log In'})
      console.log(STORE.data.userLoginStatus)

      return 'Log In'
    }
  }
}
ACTIONS.loggedInStatus()

export default ACTIONS
