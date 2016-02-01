(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/poll', 'collections/choice'], function($, _, Backbone, Marionette, App, Poll, ChoiceCollection) {
    'use strict';
    return App.module('New', function(New, App, Backbone, Marionette, $, _) {
      var DEFAULT_CHOICE_CNT, NewController;
      DEFAULT_CHOICE_CNT = 3;
      this.startWithParent = false;
      New.addInitializer(function() {
        return New.controller = new NewController();
      });
      New.addInitializer(function() {
        return App.vent.trigger('title', 'Create New Poll');
      });
      return NewController = (function(_super) {
        __extends(NewController, _super);

        function NewController() {
          return NewController.__super__.constructor.apply(this, arguments);
        }

        NewController.prototype.initialize = function() {
          var choiceCollection, i, _i;
          choiceCollection = new ChoiceCollection();
          for (i = _i = 1; 1 <= DEFAULT_CHOICE_CNT ? _i <= DEFAULT_CHOICE_CNT : _i >= DEFAULT_CHOICE_CNT; i = 1 <= DEFAULT_CHOICE_CNT ? ++_i : --_i) {
            choiceCollection.add({});
          }
          App.main.show(App.New.layout);
          App.main.currentView.addRegions({
            choiceList: '#choice-list'
          });
          App.main.currentView.choiceList.show(new App.New.ChoiceListView({
            collection: choiceCollection
          }));
          App.New.layout.on('add:choice', function() {
            return choiceCollection.add({});
          });
          return App.New.layout.on('create:poll', function(question, choices) {
            var newChoices, newPoll;
            newChoices = new ChoiceCollection(_.map(choices, function(choice) {
              return {
                text: choice
              };
            }));
            newPoll = new Poll({
              question: question,
              choices: newChoices
            });
            newPoll.on('create:success', function() {
              return Backbone.history.navigate('polls', {
                trigger: true
              });
            });
            newPoll.on('create:error', function(text) {
              return alert(text);
            });
            return newPoll.create();
          });
        };

        return NewController;

      })(Marionette.Controller);
    });
  });

}).call(this);
