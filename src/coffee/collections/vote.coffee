define(['backbone', 'models/vote'], (Backbone, Vote) ->
  'use strict'

  class VoteCollection extends Backbone.Collection
    model: Vote

  return VoteCollection
)
