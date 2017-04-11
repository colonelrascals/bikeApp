import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomePage from './homePage'
import { SellView } from './sellView'

import { RegisterPage } from './registerView'
import { AllItemsPage } from './viewAllItems'
import { BuyPage } from './buyView'

const app = function () {
  let BikeRouter = Backbone.Router.extend({
    routes: {
      'home': 'renderHomePage',
      'register': 'renderRegisterPage',
      'sell': 'renderSellPage',
      'item': 'renderViewAllItems',
      'buy': 'renderBuyPage',
      '*default': 'renderHomePage'
    },
    renderHomePage () {
      ReactDOM.render(<HomePage/>, document.querySelector('.container'))
    },

    renderRegisterPage () {
      ReactDOM.render(<RegisterPage/>, document.querySelector('.container'))
    },
    renderSellPage () {
      ReactDOM.render(<SellView/>, document.querySelector('.container'))
    },
    renderViewAllItems () {
      ReactDOM.render(<AllItemsPage/>, document.querySelector('.container'))
    },
    renderBuyPage () {
      ReactDOM.render(<BuyPage />, document.querySelector('.container'))
    }
  })
  new BikeRouter()
  Backbone.history.start()

  document.querySelector('#deleteme').innerHTML = `<form action='/stripe/charge' method="POST" id="payForm">
              <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_d4JVuiQ2oVucnvn87AKSGnO0"
                data-amount="999"
                data-name="Theironyard"
                data-description="Widget"
                data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                data-locale="auto">
              </script>
            </form>`

  document.querySelector('#payForm').onsubmit = function(e) {
    
    window.formEl = e.target
  }
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
