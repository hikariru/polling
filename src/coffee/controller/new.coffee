define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'models/poll', 'collections/choice'],
($, _, Backbone, Marionette, App, Poll, ChoiceCollection) ->
  'use strict'

  App.module('New', (New, App, Backbone, Marionette, $, _) ->
    DEFAULT_CHOICE_CNT = 3

    @startWithParent = false

    New.addInitializer( ->
        New.controller = new NewController()
    )
    New.addInitializer( ->
      App.vent.trigger('title', 'Create New Poll')
    )

    class NewController extends Marionette.Controller
      initialize: ->
        # set blank choices
        choiceCollection = new ChoiceCollection()
        for i in [1..DEFAULT_CHOICE_CNT]
          choiceCollection.add({})

        # show
        App.main.show(App.New.layout)
        App.main.currentView.addRegions(
          choiceList: '#choice-list'
        )
        App.main.currentView.choiceList.show(
          new App.New.ChoiceListView(
            collection: choiceCollection
          )
        )

        #events
        App.New.layout.on('add:choice', ->
          choiceCollection.add({})
        )

        App.New.layout.on('create:poll', (question, choices) ->
          newChoices = new ChoiceCollection(_.map(choices, (choice) ->
            {text: choice}
          ))
          newPoll = new Poll(
            question: question
            choices: newChoices
          )

          # 結果だけ教えてもらう
          newPoll.on('create:success', ->
            Backbone.history.navigate('polls', {trigger:true})
          )
          newPoll.on('create:error', (text) ->
            alert(text)
          )

          newPoll.create()
        )
  )
)
