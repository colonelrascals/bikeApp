import React from 'react'
import STORE from './store'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export const NavBar = React.createClass({
  render () {
    return (
      <Navbar>
        <Nav bsStyle='tabs' activeKey='1' onSelect={this.handleSelect}>
          <NavItem eventKey='1' href='#home'>Home</NavItem>
          <NavItem href='#register'>Register</NavItem>
          <NavDropdown eventKey='3' title='Postings' id='nav-dropdown'>
            <MenuItem eventKey='3.1'>Your Posting</MenuItem>
            <MenuItem eventKey='3.2' href='#item'>All Postings</MenuItem>
            <MenuItem eventKey='3.3'>Favorite Postings</MenuItem>
          </NavDropdown>
          <NavItem eventKey='4'>Sell</NavItem>
          <NavDropdown eventKey='5' title='Profile' id='basic-nav-dropdown'>
            <MenuItem eventKey='5.1'>Settings</MenuItem>
            <MenuItem eventKey='5.2'>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
})
