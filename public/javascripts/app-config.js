(function() {
  (function(require) {
    return require.config({
      baseUrl: 'javascripts',
      paths: {
        templates: './templates',
        underscore: '../vendors/underscore/underscore',
        jquery: '../vendors/jquery/dist/jquery',
        backbone: '../vendors/backbone/backbone',
        marionette: '../vendors/marionette/lib/backbone.marionette',
        socketio: '../socket.io/socket.io',
        chart: '../vendors/chart.js/chart'
      },
      shim: {
        templates: {
          exports: 'JST'
        },
        jquery: {
          exports: '$'
        },
        underscore: {
          exports: '_'
        },
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        marionette: {
          deps: ['underscore', 'jquery', 'backbone'],
          exports: 'Marionette'
        },
        socketio: {
          exports: 'io'
        },
        chart: {
          exports: 'Chart'
        }
      }
    });
  })(require);

}).call(this);
