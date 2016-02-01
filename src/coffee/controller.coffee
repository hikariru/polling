define(['backbone', 'marionette', 'app', 'views/header'],
(Backbone, Marionette, App, HeaderView) ->
  'use strict'

  # for Router
  class Controller extends Marionette.Controller
    initialize: ->
      App.header.show(new HeaderView())
      @currentModule = 'List'

    list: ->
      App.module(@currentModule).stop()
      @currentModule = 'List'
      App.module('List').start()

    item: (id) ->
      App.module(@currentModule).stop()
      @currentModule = 'Item'

      # 開始時にIDをセットする
      App.Item.on('before:start', (options) ->
        App.Item.pollId = options.id
      )

      App.module('Item').start({id: id})

    new: ->
      App.module(@currentModule).stop()
      @currentModule = 'New'
      App.module('New').start()

    default: ->
      Backbone.history.navigate('polls', {trigger:true})
)
