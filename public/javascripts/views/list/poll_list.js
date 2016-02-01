(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/list/poll_item', 'views/list/no_poll'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('List', function(List, App, Backbone, Marionette, $, _) {
      return List.PollListView = (function(_super) {
        __extends(PollListView, _super);

        function PollListView() {
          return PollListView.__super__.constructor.apply(this, arguments);
        }

        PollListView.prototype.tagName = 'ul';

        PollListView.prototype.childView = List.PollItemView;

        PollListView.prototype.emptyView = List.NoPollView;

        return PollListView;

      })(Marionette.CollectionView);
    });
  });

}).call(this);
