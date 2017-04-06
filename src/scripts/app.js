import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomePage from './homePage'
import { RegisterPage } from './registerView'
import { AllItemsPage } from './viewAllItems'

const app = function () {
  let BikeRouter = Backbone.Router.extend({
    routes: {
      'home': 'renderHomePage',
      'register': 'renderRegisterPage',
      'sell': 'renderSellPage',
      'allitems': 'renderViewAllItems',
      '*default': 'renderHomePage'
    },
    renderHomePage () {
      ReactDOM.render(< HomePage / >, document.querySelector('.container'))
    },
    renderRegisterPage () {
      ReactDOM.render(< RegisterPage / >, document.querySelector('.container'))
    },
    renderViewAllItems () {
      ReactDOM.render(< AllItemsPage / >, document.querySelector('.container'))
    }
  })
  new BikeRouter()
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
