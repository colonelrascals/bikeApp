import React from 'react'
import ACTIONS from './actions'
import STORE from './store'
import NavBar from './navBar'
import Header from './header'
import StripeButton from './StripeButton'

const SellView = React.createClass({
  render () {
    return (
      <div >
        <StripeButton />
      </div>
    )
  }
})

export default SellView
