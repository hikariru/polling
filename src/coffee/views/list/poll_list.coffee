define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/list/poll_item', 'views/list/no_poll'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('List', (List, App, Backbone, Marionette, $, _) ->
    class List.PollListView extends Marionette.CollectionView
      tagName: 'ul'
      childView: List.PollItemView
      emptyView: List.NoPollView
  )
)
