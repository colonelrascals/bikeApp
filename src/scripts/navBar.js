import React from 'react'
import ACTIONS from './actions'
// import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import 'materialize-css/js/materialize.js'

export const NavBar = React.createClass({

  handleLogout: function () {
    ACTIONS.loggedInStatus()
    ACTIONS.logoutUser()
  },

  render () {
    return (
      <nav className='deep-purple darken-2'>
        <div className='nav-wrapper'>

          <a href='#item' className='brand-logo center'>Bike Shop</a>
          <a className='dropdown-button left' data-activates='dropdown' data-alignment='right' data-beloworigin='true' style={{cursor: 'pointer'}}><i className='material-icons' >reorder</i></a>

          <ul className='left hide-on-med-and-down'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#register'>Login</a></li>
            <li><a href='#item'>Postings</a></li>
            <li><a href='#sell'>Sell</a></li>
          </ul>

          <ul id='dropdown' className='dropdown-content' data-stopspropagation='true'>
            <li><a href='#home' className='deep-purple-text text-darken-2' >Home</a></li>
            <li><a href='#register' className='deep-purple-text text-darken-2' >Login</a></li>
            <li><a href='#item' className='deep-purple-text text-darken-2' >Postings</a></li>
            <li><a href='#sell' className='deep-purple-text text-darken-2' >Sell</a></li>
          </ul>
        </div>
      </nav>

    )
  }
})

      // <Navbar>
      //   <Nav bsStyle='tabs' onSelect={this.handleSelect} >
      //     <NavItem eventKey='1' href='#home'>Home</NavItem>
      //     <NavItem href='#register'>Register</NavItem>
      //     <NavDropdown eventKey='3' title='Postings' id='nav-dropdown'>
      //       <MenuItem eventKey='3.1'>Your Postings</MenuItem>
      //      <MenuItem eventKey='3.2' href='#item'>All Postings</MenuItem>
      //       <MenuItem eventKey='3.3'>Favorite Postings</MenuItem>
      //     </NavDropdown>
      //     <NavItem eventKey='4' href='#sell'>Sell</NavItem>
      //     <NavItem onClick={this.handleLogout}>{this.props.userLoginStatus}</NavItem>
      //   </Nav>
      // </Navbar>
