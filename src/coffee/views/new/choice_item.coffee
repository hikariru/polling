define(['jquery', 'underscore', 'backbone', 'marionette', 'app'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('New', (New, App, Backbone, Marionette, $, _) ->
    class New.ChoiceItemView extends Marionette.ItemView
      template: 'new_choice_item'

      templateHelpers: ->
        idx: @model.collection.indexOf(@model) + 1

      ui:
        choiceInput: '.choice'
  )
)
