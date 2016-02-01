(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('List', function(List, App, Backbone, Marionette, $, _) {
      return List.NoPollView = (function(_super) {
        __extends(NoPollView, _super);

        function NoPollView() {
          return NoPollView.__super__.constructor.apply(this, arguments);
        }

        NoPollView.prototype.template = 'list_none';

        NoPollView.prototype.tagName = 'ul';

        return NoPollView;

      })(Marionette.ItemView);
    });
  });

}).call(this);
