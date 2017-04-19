import React from 'react'
import ACTIONS from './actions'
import STORE from './store'
import { NavBar } from './navBar'
import { Header } from './header'
import StripeButton from './StripeButton'
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap'
import { User } from './models/userModel.js'
import {FileStackModle} from './filestackModle'
import 'materialize-css/js/materialize.js'

export const SellView = React.createClass({
  componentWillMount () {
    STORE.on('dataUpdated', () => {
      this.setState(STORE.data)
    })
  },

  componentWillUnmount () {
    STORE.off('dataUpdated')
  },

  getInitialState () {
    return STORE.data
  },
  _handleSubmit (evtObj) {
    evtObj.preventDefault()
    var formEl = evtObj.target
    console.log(formEl)
    // if (!this._validatePosting()) {
    //   alert('somethign')
    //   return
    // }
    var itemData = {
      make: formEl.make.value,
      model: formEl.model.value,
      price: parseInt(formEl.price.value),
      size: parseInt(formEl.size.value),
      year: parseInt(formEl.year.value),
      description: formEl.description.value,
      condition: parseInt(formEl.condition.value),
      photoUrl: this.state.postingBikeURL,
      groupSet: formEl.groupset.value,
      seller: User.getCurrentUser()
    }
    ACTIONS.addListing(itemData)
    formEl.reset()
  },

  // _addBikeDeet(e) { // use this single generic function (doesn't work, base it on this idea) to update your productinthemaking. can
  //   // thusly update product preview.
  //   var bikeUpdate = {
  //     e.target.name: e.target.value
  //   }
  //   ACTIONS.updateItemModel(bikeUpdate)
  // },

  render () {
    console.log(this)
    return (
      <div >
        <Header />
        <StripeButton />
        <Form horizontal onSubmit={this._handleSubmit}>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              Make
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Make' name='make' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              Model
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Model' name='model' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalNumber'>
            <Col componentClass={ControlLabel} sm={2}>
              Price
            </Col>
            <Col sm={10}>
              <FormControl type='number' placeholder='Price' name='price' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalNumber'>
            <Col componentClass={ControlLabel} sm={2}>
              Size
            </Col>
            <Col sm={10} >
              <FormControl type='number' placeholder='Size' name='size' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalNumber'>
            <Col componentClass={ControlLabel} sm={2}>
              Year
            </Col>
            <Col sm={10}>
              <FormControl type='number' placeholder='Year' name='year' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              Descriptiom
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Description' name='description' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              Condition
            </Col>
            <Col sm={10}>
              <FormControl type='number' placeholder='Condition' name='condition' />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              URL
            </Col>
            <Col sm={10}>
              <FileStackModle />
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalText'>
            <Col componentClass={ControlLabel} sm={2}>
              Group Set
            </Col>
            <Col sm={10}>
              <FormControl type='text' placeholder='Group Set' name='groupset' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='submit' className='deep-purple darken-2'>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
})
