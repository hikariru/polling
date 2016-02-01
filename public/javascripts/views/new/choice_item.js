(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('New', function(New, App, Backbone, Marionette, $, _) {
      return New.ChoiceItemView = (function(_super) {
        __extends(ChoiceItemView, _super);

        function ChoiceItemView() {
          return ChoiceItemView.__super__.constructor.apply(this, arguments);
        }

        ChoiceItemView.prototype.template = 'new_choice_item';

        ChoiceItemView.prototype.templateHelpers = function() {
          return {
            idx: this.model.collection.indexOf(this.model) + 1
          };
        };

        ChoiceItemView.prototype.ui = {
          choiceInput: '.choice'
        };

        return ChoiceItemView;

      })(Marionette.ItemView);
    });
  });

}).call(this);
