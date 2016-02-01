(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'marionette', 'app', 'views/header'], function(Backbone, Marionette, App, HeaderView) {
    'use strict';
    var Controller;
    return Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function() {
        App.header.show(new HeaderView());
        return this.currentModule = 'List';
      };

      Controller.prototype.list = function() {
        App.module(this.currentModule).stop();
        this.currentModule = 'List';
        return App.module('List').start();
      };

      Controller.prototype.item = function(id) {
        App.module(this.currentModule).stop();
        this.currentModule = 'Item';
        App.Item.on('before:start', function(options) {
          return App.Item.pollId = options.id;
        });
        return App.module('Item').start({
          id: id
        });
      };

      Controller.prototype["new"] = function() {
        App.module(this.currentModule).stop();
        this.currentModule = 'New';
        return App.module('New').start();
      };

      Controller.prototype["default"] = function() {
        return Backbone.history.navigate('polls', {
          trigger: true
        });
      };

      return Controller;

    })(Marionette.Controller);
  });

}).call(this);
