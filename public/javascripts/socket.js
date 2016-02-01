(function() {
  define(['backbone', 'marionette', 'socketio', 'app'], function(Backbone, Marionette, io, App) {
    'use strict';
    return App.module('socket', function(socket, App, Backbone, Marionette) {
      return socket.ws = io.connect();
    });
  });

}).call(this);
