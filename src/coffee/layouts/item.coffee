define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/item/choice_list'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('Item', (Item, App, Backbone, Marionette, $, _) ->
    class ItemLayout extends Marionette.LayoutView
      template: 'item'

    Item.layout = new ItemLayout()
  )
)
