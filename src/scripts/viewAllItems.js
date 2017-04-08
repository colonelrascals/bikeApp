import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import PaymentForm from './models/stripeForm'
import { Col, Thumbnail, Button } from 'react-bootstrap'

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
        <h1>Happy Almost Birthday</h1>
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
              <Button bsStyle='primary' href='#' >More Info</Button>
              <Button onClick={this._showForm}>Buy</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    )
  }
})
