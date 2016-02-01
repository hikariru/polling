define(['backbone', 'collections/vote'], (Backbone, VoteCollection) ->
  'use strict'

  class Choice extends Backbone.Model
    defaults:
      text: ''

  return Choice
)
