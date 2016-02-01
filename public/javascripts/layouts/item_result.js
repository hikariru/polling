(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/item/result/choice_list'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('Item.Result', function(Result, App, Backbone, Marionette, $, _) {
      var ResultLayout;
      ResultLayout = (function(_super) {
        __extends(ResultLayout, _super);

        function ResultLayout() {
          return ResultLayout.__super__.constructor.apply(this, arguments);
        }

        ResultLayout.prototype.template = 'item_result';

        ResultLayout.prototype.templateHelpers = function() {
          return {
            showUserChoiceText: function() {
              if (this.userChoice != null) {
                return this.userChoice.text;
              } else {
                return '';
              }
            }
          };
        };

        ResultLayout.prototype.modelEvents = {
          'change': 'render'
        };

        return ResultLayout;

      })(Marionette.LayoutView);
      return Result.layout = new ResultLayout();
    });
  });

}).call(this);
