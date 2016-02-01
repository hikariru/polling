define(['jquery', 'underscore', 'backbone', 'marionette', 'app'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('List', (List, App, Backbone, Marionette, $, _) ->
    class List.PollItemView extends Marionette.ItemView
      template: 'list_item'
      tagName: 'li'
  )
)
