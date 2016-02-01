(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('List', function(List, App, Backbone, Marionette, $, _) {
      return List.PollItemView = (function(_super) {
        __extends(PollItemView, _super);

        function PollItemView() {
          return PollItemView.__super__.constructor.apply(this, arguments);
        }

        PollItemView.prototype.template = 'list_item';

        PollItemView.prototype.tagName = 'li';

        return PollItemView;

      })(Marionette.ItemView);
    });
  });

}).call(this);
