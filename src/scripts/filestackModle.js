import React from 'react'
import filestack from 'filestack-js'
import { Button } from 'react-bootstrap'
import Backbone from 'backbone'
var key = process.env.filestack_key || require('../../config/secrets').filestack_api

import secrets from '../../config/secrets'

export const FileStackModle = React.createClass({
  _handleClick (evtObj) {
    var client = filestack.init(key, { policy: 'policy', signature: 'signature' })
    client.pick({
      accept: ['image/*']
    }).then(function (result) {
      ACTIONS.setProductImage(/*whatever*/)
    })
  },

  render: function () {
    return (
      <div>
        <Button onClick={this._handleClick} />
      </div>
    )
  }
})
