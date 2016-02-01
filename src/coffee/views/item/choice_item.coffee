define(['jquery', 'underscore', 'backbone', 'marionette', 'app'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('Item', (Item, App, Backbone, Marionette, $, _) ->
    class Item.ChoiceItemView extends Marionette.ItemView
      template: 'item_choice_item'
      tagName: 'div'
      className: 'radio'

      ui:
        choiceInput: '.choice'
  )
)
