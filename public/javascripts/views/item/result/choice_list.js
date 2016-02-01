(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'chart', 'app'], function($, _, Backbone, Marionette, Chart, App) {
    'use strict';
    return App.module('Item.Result', function(Result, App, Backbone, Marionette, $, _) {
      return Result.ChoiceListView = (function(_super) {
        __extends(ChoiceListView, _super);

        function ChoiceListView() {
          return ChoiceListView.__super__.constructor.apply(this, arguments);
        }

        ChoiceListView.prototype.initialize = function() {
          var choice, ctx, data, pieChart, _i, _len, _ref;
          data = [];
          ctx = $('#result-graph').get(0).getContext('2d');
          _ref = this.model;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            choice = _ref[_i];
            data.push({
              value: choice.get('vote').length,
              label: choice.get('text'),
              color: '#ccc',
              highlibht: '#eee'
            });
          }
          return pieChart = new Chart(ctx).Pie(data, {
            segmentStrokeColor: '#999'
          });
        };

        return ChoiceListView;

      })(Marionette.ItemView);
    });
  });

}).call(this);
