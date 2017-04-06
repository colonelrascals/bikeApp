import React from 'react'
import STORE from './store.js'
import { Jumbotron } from 'react-bootstrap'

export const Header = React.createClass({
  render () {
    return (
      <div>
        <Jumbotron>
          <h1 className='text-center'>BIKE SHOP</h1>
        </Jumbotron>
      </div>
    )
  }
})
