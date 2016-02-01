define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'collections/poll'],
($, _, Backbone, Marionette, App, PollCollection) ->
  'use strict'

  App.module('List', (List, App, Backbone, Marionette, $, _) ->
    @startWithParent = false

    List.addInitializer( ->
        List.controller = new ListController()
    )
    List.addInitializer( ->
      App.vent.trigger('title', 'Poll List')
    )

    class ListController extends Marionette.Controller
      initialize: ->
        # fetch
        pollCollection = new PollCollection()
        pollCollection.fetch()

        # show
        App.main.show(App.List.layout)
        App.main.currentView.addRegions(
          polls: '#polls'
        )
        App.main.currentView.polls.show(new List.PollListView(
          collection: pollCollection
        ))

        #events

        # 前方一致で検索してビュー更新するやつ
        App.List.layout.on('search', (searchVal) ->
          return if typeof pollCollection is "undefined" or
            pollCollection.size() is 0

          if searchVal is ''
            filteredCollection = pollCollection
          else
            pattern = new RegExp(searchVal)
            filteredCollection = new PollCollection(
              pollCollection.filter((poll) ->
                poll.get('question').match(pattern)
              )
            )

          listView = App.main.currentView.polls.currentView
          listView.collection = filteredCollection
          listView.render()
        )
  )
)
