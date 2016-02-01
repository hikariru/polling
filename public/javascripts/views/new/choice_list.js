(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/new/choice_item'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('New', function(New, App, Backbone, Marionette, $, _) {
      return New.ChoiceListView = (function(_super) {
        __extends(ChoiceListView, _super);

        function ChoiceListView() {
          return ChoiceListView.__super__.constructor.apply(this, arguments);
        }

        ChoiceListView.prototype.childView = New.ChoiceItemView;

        return ChoiceListView;

      })(Marionette.CollectionView);
    });
  });

}).call(this);
