(function() {
  define(['jquery', 'underscore', 'backbone', 'marionette'], function($, _, Backbone, Marionette) {
    'use strict';
    var App;
    App = new Marionette.Application();
    App.addRegions({
      'header': '#page-header',
      'main': '#main-content'
    });
    App.on('start', function() {
      return Backbone.history.start({
        pushState: true
      });
    });
    return App;
  });

}).call(this);
