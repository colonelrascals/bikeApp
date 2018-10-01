import Backbone from 'backbone'

export const ItemModel = Backbone.Model.extend({
  urlRoot: '/api/item/sell',
  idAttribute: '_id'
})
export const ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  url: '/api/item'
})
