import React from 'react'
import { Popover, Tooltip, Button, Modal, OverlayTrigger, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import STORE from './store'
import ACTION from './actions'

import ReactScriptLoader from 'react-script-loader'

export const Payment = React.createClass({
  getInitialState () {
    return STORE.data
  },
  getValidationState () {
    const length = this.state.inputValue.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  },

  handleChange (e) {
    // this.setState({ inputValue: e.target.value });
    STORE.on('dataUpdated', () => {
      this.setState({ inputValue: e.target.value })
    })
  },

  _handleSubmit (event) {
    window.formEl = event.target
  },

  render () {
    const popover = (
      <Popover id='modal-popover' title='popover'>
          very popover. such engagement
        </Popover>
      )
    const tooltip = (
      <Tooltip id='modal-tooltip'>
          wow.
        </Tooltip>
      )

    return (

      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <CheckoutForm />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ACTION.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

const CheckoutForm = React.createClass({
  mixins: [ ReactScriptLoader.ReactScriptLoaderMixin ],

  getScriptURL () {
    return 'https://checkout.stripe.com/checkout.js'
  },

  onScriptLoaded () {
    console.log(' i did it')
  },

  onScriptError () {
    console.log(':(')
  },

  render () {
    return (
      <div />
    )
  }
})

              // <script
              //   src="https://checkout.stripe.com/checkout.js" class="stripe-button"
              //   data-key="pk_test_d4JVuiQ2oVucnvn87AKSGnO0"
              //   data-amount="999"
              //   data-name="Theironyard"
              //   data-description="Widget"
              //   data-image="https ://stripe.com/img/documentation/checkout/marketplace.png"
              //   data-locale="auto">

              // <div className='form-row'>
              //   <label htmlFor='card-element'>
              //   Credit or debit card
              // </label>
              //   <div id='card-element'>
              //   card-element
              // </div>

              //   <div id='card-errors'>card-element</div>
              // </div>
