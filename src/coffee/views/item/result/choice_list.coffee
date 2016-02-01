define(['jquery', 'underscore', 'backbone', 'marionette', 'chart', 'app'
# 'views/item/result/choice_item'
], ($, _, Backbone, Marionette, Chart, App) ->
  'use strict'

  App.module('Item.Result', (Result, App, Backbone, Marionette, $, _) ->
    class Result.ChoiceListView extends Marionette.ItemView
      # tagName: 'table'
      # className: 'result-table'
      # childView: Result.ChoiceItemView

      initialize: ->
        data = []
        ctx = $('#result-graph').get(0).getContext('2d')

        for choice in @model
          data.push({
            value: choice.get('vote').length
            label: choice.get('text')
            color: '#ccc'
            highlibht: '#eee'
          })

        pieChart = new Chart(ctx).Pie(data, {
          segmentStrokeColor: '#999'
        })
  )
)
