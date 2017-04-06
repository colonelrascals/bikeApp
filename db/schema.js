const mongoose = require('mongoose')

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

  // example of optional fields
  name: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  bikeSize: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const itemSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  sellerName: {
    type: mongoose.Schema.Types.ObjectId.name,
    ref: 'User'
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  groupSet: {
    type: String
  },
  photoUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  condition: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  shippingCost: {
    type: Number
  },
  frameOnly: {
    type: Boolean
  },
  wheels: {
    type: Boolean
  },
  pedals: {
    type: Boolean
  }
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Item: mongoose.model('Item', itemSchema)
}
