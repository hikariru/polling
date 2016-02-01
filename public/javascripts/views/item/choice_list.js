(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/item/choice_item'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('Item', function(Item, App, Backbone, Marionette, $, _) {
      return Item.ChoiceListView = (function(_super) {
        __extends(ChoiceListView, _super);

        function ChoiceListView() {
          return ChoiceListView.__super__.constructor.apply(this, arguments);
        }

        ChoiceListView.prototype.template = 'item_choice_list';

        ChoiceListView.prototype.childView = Item.ChoiceItemView;

        ChoiceListView.prototype.childViewContainer = '#choice-list';

        ChoiceListView.prototype.ui = {
          form: '#vote-form'
        };

        ChoiceListView.prototype.events = {
          'submit @ui.form': 'onVote'
        };

        ChoiceListView.prototype.onVote = function(ev) {
          var choiceArray, choiceId;
          ev.preventDefault();
          choiceArray = this.children.toArray();
          choiceId = null;
          _.each(choiceArray, function(choice) {
            if (choice.ui.choiceInput.prop('checked')) {
              return choiceId = choice.model.get('_id');
            }
          });
          return this.trigger('vote', choiceId);
        };

        return ChoiceListView;

      })(Marionette.CompositeView);
    });
  });

}).call(this);
