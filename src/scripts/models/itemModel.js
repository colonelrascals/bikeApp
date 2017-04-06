import Backbone from 'backbone'
import User from './userModel'

export const ItemModel = Backbone.Model.extend({
  urlRoot: '/api/item',
  idAttribute: '_id'
})
export const ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  url: '/api/item'
})
