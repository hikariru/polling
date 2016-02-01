(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'marionette', 'app'], function($, Marionette, App) {
    'use strict';
    var HeaderView;
    HeaderView = (function(_super) {
      __extends(HeaderView, _super);

      function HeaderView() {
        this.initialize = __bind(this.initialize, this);
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.template = 'header';

      HeaderView.prototype.tagName = 'h1';

      HeaderView.prototype.initialize = function() {
        return App.vent.on('title', (function(_this) {
          return function(title) {
            document.title = title;
            return _this.$el.text(title);
          };
        })(this));
      };

      return HeaderView;

    })(Marionette.ItemView);
    return HeaderView;
  });

}).call(this);
