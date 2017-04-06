import React from 'react'
import STORE from './store'
import ACTIONS from './actions'
import { NavBar } from './navBar'
import { Header } from './header'

const HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    )
  }
})

export default HomePage
