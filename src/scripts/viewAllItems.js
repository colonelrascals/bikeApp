import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import { Col, Thumbnail, Button } from 'react-bootstrap'
import { Payment } from './paymentModal'

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
    return console.log('hello')
  },
  onToken () {
    return this.props.itemModel.get('seller').access_token
  },
  close (ectObj) {
    STORE.set({ showModal: false })
  },
  open (evtObj) {
    STORE.set({showModal: true})
  },
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
              <Button bsStyle='success' onClick={this.open}>Buy</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    )
  }
})

// stripeKey={this.props.itemModel.attributes.seller.get('stripe_publishable_key')} token={this.props.itemModel.attributes.seller.get('sk_test_JuUlJtrMH9W8a8tpvdgI9RDn')}
