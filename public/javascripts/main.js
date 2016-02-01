(function() {
  require(['marionette', 'app', 'templates', 'router', 'controller', 'controller/list', 'layouts/list', 'controller/item', 'layouts/item', 'controller/new', 'layouts/new', 'socket'], function(Marionette, App, JST, Router, Controller) {
    'use strict';
    App.addInitializer(function() {
      return new Router({
        controller: new Controller()
      });
    });
    App.addInitializer(function() {
      return Marionette.Renderer.render = function(template, data) {
        if (!JST[template]) {
          throw "Template " + template + " not found!";
        }
        return JST[template](data);
      };
    });
    return App.start();
  });

}).call(this);
