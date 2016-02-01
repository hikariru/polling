define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'views/item/result/choice_list'],
($, _, Backbone, Marionette, App) ->
  'use strict'

  App.module('Item.Result', (Result, App, Backbone, Marionette, $, _) ->
    class ResultLayout extends Marionette.LayoutView
      template: 'item_result'
      templateHelpers: ->
        # データ取ってこないとわからん
        showUserChoiceText: ->
          if @userChoice?
            return @userChoice.text
          else
            return ''

      modelEvents:
        'change': 'render'

    Result.layout = new ResultLayout()
  )
)
