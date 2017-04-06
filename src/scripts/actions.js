import React from 'react'
import STORE from './store'
import User from './models/userModel'
import Backbone from 'backbone'
import { ItemModel, ItemCollection } from './models/itemModel'
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
  }

}

export default ACTIONS
