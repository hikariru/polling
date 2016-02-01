define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/list/poll_list'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('List', (List, App, Backbone, Marionette, $, _) ->
    class ListLayout extends Marionette.LayoutView
      template: 'list'
      ui:
        searchInput: '#search-input'

      events:
        'keyup @ui.searchInput': 'onSearch'

      onSearch: ->
        @trigger('search', @ui.searchInput.val())

    List.layout = new ListLayout()
  )
)
