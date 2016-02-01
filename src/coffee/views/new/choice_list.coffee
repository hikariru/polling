define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/new/choice_item'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('New', (New, App, Backbone, Marionette, $, _) ->
    class New.ChoiceListView extends Marionette.CollectionView
      childView: New.ChoiceItemView
  )
)
