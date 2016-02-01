define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/poll'],
($, _, Backbone, Marionette, App, Poll) ->
  'use strict'

  App.module('Item.Result', (Result, App, Backbone, Marionette, $, _) ->
    @startWithParent = false

    Result.addInitializer( ->
        Result.controller = new ResultController()
    )
    Result.addInitializer( ->
      App.vent.trigger('title', 'View Poll')
    )

    class ResultController extends Marionette.Controller
      initialize: ->
        poll = new Poll({_id: App.Item.pollId})
        poll.fetch({
          success: ->
            poll = App.Item.parsePoll(poll)
            Result.layout.model = poll

            # show
            App.main.currentView.vote.show(Result.layout)
            App.main.currentView.vote.currentView.addRegions(
              graph: '#result-graph'
            )
            App.main.currentView.vote.currentView.graph.show(new Result.ChoiceListView(
              model: poll.get('choices')
            ))
        })
  )
)
