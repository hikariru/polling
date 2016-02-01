define(['jquery', 'underscore', 'backbone', 'marionette', 'app'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  # show when no polls in db
  App.module('List', (List, App, Backbone, Marionette, $, _) ->
    class List.NoPollView extends Marionette.ItemView
      template: 'list_none'
      tagName: 'ul'
  )
)
