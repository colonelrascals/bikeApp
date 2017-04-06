import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap'
import STORE from './store'

export const StripeButton = React.createClass({
  onToken (token) {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  },

  // ...

  render () {
    return (
      <StripeCheckout
        name='Three Comma Co.'
        description='Big Data Stuff'
        ComponentClass='div'
        panelLabel='Give Money'
        amount={1000000}
        currency='USD'
        stripeKey='pk_test_d4JVuiQ2oVucnvn87AKSGnO0'
        locale='auto'
        email='info@vidhub.co'
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay
        bitcoin
        allowRememberMe
        token={this.onToken}
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        >
        <Button>
          Buy
        </Button>
      </StripeCheckout>
    )
  }
})
