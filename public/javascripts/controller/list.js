(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'collections/poll'], function($, _, Backbone, Marionette, App, PollCollection) {
    'use strict';
    return App.module('List', function(List, App, Backbone, Marionette, $, _) {
      var ListController;
      this.startWithParent = false;
      List.addInitializer(function() {
        return List.controller = new ListController();
      });
      List.addInitializer(function() {
        return App.vent.trigger('title', 'Poll List');
      });
      return ListController = (function(_super) {
        __extends(ListController, _super);

        function ListController() {
          return ListController.__super__.constructor.apply(this, arguments);
        }

        ListController.prototype.initialize = function() {
          var pollCollection;
          pollCollection = new PollCollection();
          pollCollection.fetch();
          App.main.show(App.List.layout);
          App.main.currentView.addRegions({
            polls: '#polls'
          });
          App.main.currentView.polls.show(new List.PollListView({
            collection: pollCollection
          }));
          return App.List.layout.on('search', function(searchVal) {
            var filteredCollection, listView, pattern;
            if (typeof pollCollection === "undefined" || pollCollection.size() === 0) {
              return;
            }
            if (searchVal === '') {
              filteredCollection = pollCollection;
            } else {
              pattern = new RegExp(searchVal);
              filteredCollection = new PollCollection(pollCollection.filter(function(poll) {
                return poll.get('question').match(pattern);
              }));
            }
            listView = App.main.currentView.polls.currentView;
            listView.collection = filteredCollection;
            return listView.render();
          });
        };

        return ListController;

      })(Marionette.Controller);
    });
  });

}).call(this);
