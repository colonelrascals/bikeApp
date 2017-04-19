import React from 'react'
import ACTIONS from './actions'
import {Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel} from 'react-bootstrap'
import { NavBar } from './navBar'
import { Header } from './header'
import { STORE } from './store'
import 'materialize-css/js/materialize.js'

export const RegisterPage = React.createClass({

  render () {
    return (
      <div>
        <Header />
        <LoginComponent />
        <RegisterComponent />
      </div>
    )
  }
})

const LoginComponent = React.createClass({
  _handleSubmit (evtObj) {
    evtObj.preventDefault()
    var formEl = evtObj.target
    var formData = {
      email: formEl.email.value.toString(),
      password: formEl.password.value.toString()
    }

    ACTIONS.loginUser(formEl.email.value, formEl.password.value)
    formEl.reset()
  },
  render () {
    return (
      <div className='col 6'>
        <Form horizontal onSubmit={this._handleSubmit}>
          <FormGroup controlId='formHorizontalEmail'>
            <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
            <Col sm={10}>
              <FormControl type='email' placeholder='Email' name='email' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
            <Col sm={10}>
              <FormControl type='password' placeholder='Password' name='password' />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='submit' className='deep-purple darken-2'>
                  Sign in
                </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
})

const RegisterComponent = React.createClass({
  _handleSubmit (evtObj) {
    evtObj.preventDefault()
    var formEl = evtObj.target
    var formData = {
      name: formEl.name.value,
      email: formEl.email.value,
      password: formEl.password.value,
      location: formEl.location.value
    }
    ACTIONS.registerUser(formData)

    formEl.reset()
  },
  render () {
    return (
      <div className='col 6'>
        <Form horizontal onSubmit={this._handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Name' name='name' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formHorizontalEmail'>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type='email' placeholder='Email' name='email' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type='password' placeholder='Password' name='password' />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Location
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Location' name='location' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formControlsSelect' sm={4}>
            <Col componentClass={ControlLabel} sm={2}>
              Bike Size
            </Col>
            <Col sm={10}>
              <FormControl componentClass='select' placeholder='Size' small={4}>
                <option value='option' >48</option>
                <option value='option' >50</option>
                <option value='option' >52</option>
                <option value='option' >54</option>
                <option value='option' >56</option>
                <option value='option' >58</option>
                <option value='option' >60</option>
                <option value='option' >62</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='submit' className='deep-purple darken-2'>
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    )
  }
})
