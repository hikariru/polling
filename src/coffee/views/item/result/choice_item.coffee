define(['jquery', 'underscore', 'backbone', 'marionette', 'app'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('Item.Result', (Result, App, Backbone, Marionette, $, _) ->
    class Result.ChoiceItemView extends Marionette.ItemView
      template: 'item_result_choice_item'
      tagName: 'tr'
  )
)
