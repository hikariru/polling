define(['backbone', 'models/choice'], (Backbone, Choice) ->
  'use strict'

  class ChoiceCollection extends Backbone.Collection
    model: Choice

  return ChoiceCollection
)
