define(['backbone', 'marionette', 'socketio', 'app', ],
  (Backbone, Marionette, io, App) ->
    'use strict'

    App.module('socket', (socket, App, Backbone, Marionette) ->
      socket.ws = io.connect()

      # socket.wson = (eventName, callback) ->
      #   ws.on(eventName, ->
      #     args = arguments
      #     callback.apply(callback, args)
      #   )

      # socket.wsemit = (eventName, data, callback) ->
      #   ws.emit(eventName, data, ->
      #     args = arguments
      #     callback.apply(callback, args) if callback?
      #   )
    )
)
