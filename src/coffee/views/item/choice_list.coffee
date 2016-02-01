define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/item/choice_item'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('Item', (Item, App, Backbone, Marionette, $, _) ->
    class Item.ChoiceListView extends Marionette.CompositeView
      template: 'item_choice_list'
      childView: Item.ChoiceItemView
      childViewContainer: '#choice-list'

      ui:
        form: '#vote-form'

      events:
        'submit @ui.form': 'onVote'

      onVote: (ev) ->
        ev.preventDefault()
        choiceArray = @children.toArray()
        choiceId = null
        _.each(choiceArray, (choice) ->
          choiceId = choice.model.get('_id') if choice.ui.choiceInput.prop('checked')
        )

        @trigger('vote', choiceId)
  )
)
