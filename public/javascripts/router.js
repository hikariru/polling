(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette'], function(Marionette) {
    'use strict';
    var Router;
    Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.appRoutes = {
        'polls': 'list',
        'poll/:pollId': 'item',
        'new': 'new',
        '*notFound': 'default'
      };

      return Router;

    })(Marionette.AppRouter);
    return Router;
  });

}).call(this);
