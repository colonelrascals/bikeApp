import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap'

export const CheckoutButton = React.createClass({
  render () {
    return (
      <StripeCheckout stripeKey={this.props.itemModel.get('seller').stripe_publishable_key} token={this.props.itemModel.get('seller').access_token} name={this.props.itemModel.get('seller').name}
        email={this.props.itemModel.get('seller').email} stripe_account={this.props.itemModel.get('seller').stripe_user_id}

        description='Big Data Stuff'
        amount={1000000}
        currency='USD'
        shippingAddress
        billingAddress={false}
        zipCode={false}
        alipay
        bitcoin
        allowRememberMe

        reconfigureOnUpdate>
        <Button >
         Buy Me
        </Button>
      </StripeCheckout>
    )
  }
})
