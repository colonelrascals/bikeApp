import React from 'react'
import { NavBar } from './navBar'
import { Header } from './header'
import ACTION from './actions'
import STORE from './store'
import StripeCheckout from 'react-stripe-checkout'
import toastr from 'toastr'

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export const AllItemsPage = React.createClass({
  componentWillMount () {
    ACTION.fetchAllItems()
    STORE.on('dataUpdated', () => {
      this.setState(STORE.data)
    })
  },
  getInitialState () {
    return STORE.data
  },
  render () {
    console.log(this)
    return (
      <div>
        <Header />
        <CurrentItems items={this.state.ItemCollection} />
      </div>
    )
  }
})
export const CurrentItems = React.createClass({
  _makeItem (model) {
    return <Item itemModel={model} key={model.id} />
  },
  render () {
    return (
      <div className= "row">
        {this.props.items.map(this._makeItem)}
      </div>
    )
  }
})
export const Item = React.createClass({
  // _showForm () {

  // },
  onToken (token) {


    var data = {
      tokenId: token.id,
      price: Math.floor(this.props.itemModel.get('price') * 100),
      stripeUserId: this.props.itemModel.get('seller').stripe_user_id,
      myFee: Math.floor(this.props.itemModel.get('price') * 2)
    }
    fetch('/stripe/charge', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then(response => {
      return response.json()
    })
      .then(resp => {
        toastr.success("", "Checkout Complete!")
      })
  },
  render () {
    if (this.props.itemModel.get('seller').stripe_publishable_key.includes('tChP')) { // this is a troubleshooting step

      return <div />
    }

    return (

        <div className="col s12 m4">
          <div className="card large">
            <div className="card-image responsive-img">
              <img src={this.props.itemModel.get('photoUrl')} alt='' width='100px' height='200px'className='responsive-img' />
            </div>
            <div className="card-content">
              <h4>{this.props.itemModel.get('make')}</h4>
              <h5>{this.props.itemModel.get('model')}</h5>
              <p>{this.props.itemModel.get('year')}</p>
            </div>
            <div className="card-action">
              <h6>${this.props.itemModel.get('price')}</h6>

              <StripeCheckout
                stripeKey={this.props.itemModel.get('seller').stripe_publishable_key}
                token={this.onToken}
                name={this.props.itemModel.get('seller').name}
                email={this.props.itemModel.get('seller').email}
                stripe_account={this.props.itemModel.get('seller').stripe_user_id}
                description='Bike Shop'
                amount={Math.floor(this.props.itemModel.get('price') * 100)}
                currency='USD'
                shippingAddress
                billingAddress
                zipCode={false}
                bitcoin
                allowRememberMe
                reconfigureOnUpdate>

                <a className='deep-purple darken-2 btn'>
                 Buy Me
                </a>
              </StripeCheckout>
            </div>
          </div>
        </div>

            

    )
  }
})
 