(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/poll'], function($, _, Backbone, Marionette, App, Poll) {
    'use strict';
    return App.module('Item.Result', function(Result, App, Backbone, Marionette, $, _) {
      var ResultController;
      this.startWithParent = false;
      Result.addInitializer(function() {
        return Result.controller = new ResultController();
      });
      Result.addInitializer(function() {
        return App.vent.trigger('title', 'View Poll');
      });
      return ResultController = (function(_super) {
        __extends(ResultController, _super);

        function ResultController() {
          return ResultController.__super__.constructor.apply(this, arguments);
        }

        ResultController.prototype.initialize = function() {
          var poll;
          poll = new Poll({
            _id: App.Item.pollId
          });
          return poll.fetch({
            success: function() {
              poll = App.Item.parsePoll(poll);
              Result.layout.model = poll;
              App.main.currentView.vote.show(Result.layout);
              App.main.currentView.vote.currentView.addRegions({
                graph: '#result-graph'
              });
              return App.main.currentView.vote.currentView.graph.show(new Result.ChoiceListView({
                model: poll.get('choices')
              }));
            }
          });
        };

        return ResultController;

      })(Marionette.Controller);
    });
  });

}).call(this);
