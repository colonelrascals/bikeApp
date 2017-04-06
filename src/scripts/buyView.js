import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

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
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey='sk_test_uPMTRSkYi8zaG5pCcJX9QUEF'
      />
    )
  }
})
