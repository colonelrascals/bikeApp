import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import { Col, Thumbnail, Button } from 'react-bootstrap'
import { Payment } from './paymentModal'
import StripeCheckout from 'react-stripe-checkout'
import {CheckoutButton} from './checkoutButton'

export const AllItemsPage = React.createClass({
  componentWillMount () {
    ACTION.fetchAllItems()
    STORE.on('dataUpdated', () => {
      this.setState(STORE.data)
    })
  },
  getInitialState () {
    return STORE.data
  },
  render () {
    return (
      <div>
        <Header />
        <NavBar />
        <Payment />
        <CurrentItems items={this.state.ItemCollection} />
      </div>
    )
  }
})
export const CurrentItems = React.createClass({
  _makeItem (model) {
    return <Item itemModel={model} key={model.id} />
  },
  render () {
    return (
      <div>
        {this.props.items.map(this._makeItem)}
      </div>
    )
  }
})
export const Item = React.createClass({
  _showForm () {

  },
  onToken (token) {
    console.log(token, JSON.stringify(token))

    var data = {
      tokenId: token.id,
      price: Math.floor(this.props.itemModel.get('price') * 100),
      stripeUserId: this.props.itemModel.get('seller').stripe_user_id,
      myFee: Math.floor(this.props.itemModel.get('price') * 2)
    }
    console.log(JSON.stringify(data))
    fetch('/stripe/charge', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then(response => {
      return response.json()
    })
      .then(resp => {
        console.log(resp)
        alert('we are in business')
      })
  },
  render () {
    return (
      <div>
        <Col xs={6} md={4}>
          <Thumbnail src={this.props.itemModel.get('photoUrl')} alt='242x200'>
            <h2>{this.props.itemModel.get('make')}</h2>
            <h3>{this.props.itemModel.get('model')}</h3>
            <small>{this.props.itemModel.get('year')}</small>
            <p>{this.props.itemModel.get('description').substr(0, 10)}</p>
            <h4>${this.props.itemModel.get('price')}</h4>
            <p>
              <Button bsStyle='primary' href='#' block>More Info</Button>

              <StripeCheckout
                stripeKey={this.props.itemModel.get('seller').stripe_publishable_key}
                token={this.onToken}
                name={this.props.itemModel.get('seller').name}
                email={this.props.itemModel.get('seller').email}
                stripe_account={this.props.itemModel.get('seller').stripe_user_id}
                description='Big Data Stuff'
                amount={Math.floor(this.props.itemModel.get('price') * 100)}
                currency='USD'
                shippingAddress
                billingAddress
                zipCode={false}
                alipay
                bitcoin
                allowRememberMe

                reconfigureOnUpdate>

                <Button bsStyle='success' block>
                 Buy Me
                </Button>

              </StripeCheckout>
            </p>
          </Thumbnail>
        </Col>
      </div>
    )
  }
})
