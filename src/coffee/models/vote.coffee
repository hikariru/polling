define(['backbone'], (Backbone) ->
  'use strict'

  class Vote extends Backbone.Model
    defaults:
      ip: ''

  return Vote
)
