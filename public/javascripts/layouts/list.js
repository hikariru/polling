(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/list/poll_list'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('List', function(List, App, Backbone, Marionette, $, _) {
      var ListLayout;
      ListLayout = (function(_super) {
        __extends(ListLayout, _super);

        function ListLayout() {
          return ListLayout.__super__.constructor.apply(this, arguments);
        }

        ListLayout.prototype.template = 'list';

        ListLayout.prototype.ui = {
          searchInput: '#search-input'
        };

        ListLayout.prototype.events = {
          'keyup @ui.searchInput': 'onSearch'
        };

        ListLayout.prototype.onSearch = function() {
          return this.trigger('search', this.ui.searchInput.val());
        };

        return ListLayout;

      })(Marionette.LayoutView);
      return List.layout = new ListLayout();
    });
  });

}).call(this);
