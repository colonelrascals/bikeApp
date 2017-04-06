import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import { Col, Thumbnail, Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'

export const AllItemsPage = React.createClass({
  componentWillMount () {
    console.log(this.state)
    ACTION.fetchAllItems()
    STORE.on('dataUpdated', () => {
      this.setState(STORE.data)
    })
  },
  getInitialState () {
    return STORE.data
  },
  render () {
    console.log(this.state)
    return (
      <div>
        <Header />
        <NavBar />
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
    console.log(this.props)
    return (
      <div>
        {this.props.items.map(this._makeItem)}
      </div>
    )
  }
})
export const Item = React.createClass({
  render () {
    console.log(this.props.itemModel)
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
              <Button bsStyle='primary' href='#' >More Info</Button>
              <StripeButton />
            </p>
          </Thumbnail>
        </Col>
      </div>
    )
  }
})
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
        name='name'
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
