(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/new/choice_list'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('New', function(New, App, Backbone, Marionette, $, _) {
      var NewLayout;
      NewLayout = (function(_super) {
        __extends(NewLayout, _super);

        function NewLayout() {
          return NewLayout.__super__.constructor.apply(this, arguments);
        }

        NewLayout.prototype.template = 'new';

        NewLayout.prototype.ui = {
          addChoiceBtn: '#add-choice',
          form: '#new-poll',
          questionInput: '#pollQuestion'
        };

        NewLayout.prototype.events = {
          'click @ui.addChoiceBtn': 'onAddChoice',
          'submit @ui.form': 'onSubmitNewPoll'
        };

        NewLayout.prototype.onAddChoice = function() {
          return this.trigger('add:choice');
        };

        NewLayout.prototype.onSubmitNewPoll = function(e) {
          var choices, question;
          e.preventDefault();
          question = this.ui.questionInput.val();
          choices = _.map(this.choiceList.currentView.children.toArray(), function(choiceItem) {
            return choiceItem.ui.choiceInput.val();
          });
          return this.trigger('create:poll', question, choices);
        };

        return NewLayout;

      })(Marionette.LayoutView);
      return New.layout = new NewLayout();
    });
  });

}).call(this);
