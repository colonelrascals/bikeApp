import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import { Col, Thumbnail, Button } from 'react-bootstrap'
import { StripeButton } from './buyView'

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
