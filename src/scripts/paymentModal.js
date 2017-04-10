import React from 'react'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap'
import STORE from './store'

export const Payment = React.createClass({
  getInitialState () {
    return STORE.data
  },

  close () {
    STORE.set({ showModal: false })
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
            <form action='/charge' method='post' id='payment-form'>
              <div class='form-row'>
                <label for='card-element'>
                Credit or debit card
              </label>
                <div id='card-element'>
                card-element
              </div>

                <div id='card-errors'>card-element</div>
              </div>

              <button>Submit Payment</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
