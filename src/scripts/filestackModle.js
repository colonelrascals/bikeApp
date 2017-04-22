import React from 'react'
import filestack from 'filestack-js'
import { Button } from 'react-bootstrap'
import Backbone from 'backbone'
import ACTIONS from './actions.js'

var key = process.env.filestack_key || require('../../config/secrets').filestack_api

import secrets from '../../config/secrets'

export const FileStackModle = React.createClass({
  _handleClick (evtObj) {
    var client = filestack.init(key, { policy: 'policy', signature: 'signature' })
    client.pick({
      accept: ['image/*']

    }).then(function (result) {
      ACTIONS.setProductImage(result.filesUploaded[0].url)
    })
  },

  render: function () {
    return (
      <div>
        <Button onClick={this._handleClick} className='deep-purple darken-2'>Upload Photo</Button>
      </div>
    )
  }
})
