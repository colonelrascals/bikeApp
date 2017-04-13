import React from 'react'
import filestack from 'filestack-js'
import { Button } from 'react-bootstrap'
import Backbone from 'backbone'


export const FileStackModle = React.createClass({
    _handleClick(evtObj){
      var client = filestack.init('AdNmmzwFSLiIsmAskuqAaz', { policy: 'policy', signature: 'signature' });
          client.pick({
            accept: ['image/*']
          }).then(function(result) {

            ACTIONS.setProductImage(/*whatever*/)
          })
    },

    render: function () {
        return (
            <div>
              <Button onClick={this._handleClick}></Button>
            </div>
        )
    }
})


