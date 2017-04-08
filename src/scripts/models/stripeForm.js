import React from 'react'
import ReactScriptLoaderMixin from 'react-script-loader'
import { STORE } from '../store'

var PaymentForm = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],
  getInitialState () {
    return STORE.data
  },
  getScriptURL: function () {
    return 'https://js.stripe.com/v3/'
  },

  onScriptLoaded: function () {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('ppk_test_d4JVuiQ2oVucnvn87AKSGnO0')

      STORE.setState({ stripeLoading: false, stripeLoadingError: false })
    }
  },

  onScriptError: function () {
    STORE.setState({ stripeLoading: false, stripeLoadingError: true })
  },

  onSubmit: function (event) {
    var self = this
    event.preventDefault()
    STORE.setState({ submitDisabled: true, paymentError: null })
    // send form here
    Stripe.createToken(event.target, function (status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false })
      } else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id })
        // make request to your server here!
      }
    })
  },

  render: function () {
    if (this.state.stripeLoading) {
      return <div>Loading</div>
    } else if (this.state.stripeLoadingError) {
      return <div>Error</div>
    } else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>
    } else {
      return (<form onSubmit={this.onSubmit} >
        <span>{ this.state.paymentError }</span><br />
        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
      </form>)
    }
  }
})

export default PaymentForm
