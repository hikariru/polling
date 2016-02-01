define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/new/choice_list'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('New', (New, App, Backbone, Marionette, $, _) ->
    class NewLayout extends Marionette.LayoutView
      template: 'new'
      ui:
        addChoiceBtn: '#add-choice'
        form: '#new-poll'
        questionInput: '#pollQuestion'

      events:
        'click @ui.addChoiceBtn': 'onAddChoice'
        'submit @ui.form': 'onSubmitNewPoll'

      onAddChoice: ->
        @trigger('add:choice')

      onSubmitNewPoll: (e) ->
        e.preventDefault()

        question = @ui.questionInput.val()
        choices = _.map(@choiceList.currentView.children.toArray(), (choiceItem) ->
          choiceItem.ui.choiceInput.val()
        )

        @trigger('create:poll', question, choices)

    New.layout = new NewLayout()
  )
)
