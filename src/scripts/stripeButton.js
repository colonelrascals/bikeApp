import React, { Component } from 'react'

class StripeButton extends Component {
  render () {
    return (
      <div>
        <button>
          <a href='https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_AQrrObbvUvoFW4DZh4CmP3xTgX4tS2vY&scope=read_write'>
          Connect payment!
          </a>
        </button>
      </div>
    )
  }
}

export default StripeButton
