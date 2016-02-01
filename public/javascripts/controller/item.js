(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'models/poll', 'collections/choice', 'collections/vote', 'controller/item_result', 'layouts/item_result'], function($, _, Backbone, Marionette, App, Poll, ChoiceCollection, VoteCollection) {
    'use strict';
    return App.module('Item', function(Item, App, Backbone, Marionette, $, _) {
      var ItemController;
      this.startWithParent = false;
      Item.addInitializer(function() {
        return Item.controller = new ItemController();
      });
      Item.addInitializer(function() {
        return App.vent.trigger('title', 'View Poll');
      });
      ItemController = (function(_super) {
        __extends(ItemController, _super);

        function ItemController() {
          return ItemController.__super__.constructor.apply(this, arguments);
        }

        ItemController.prototype.initialize = function() {
          var poll;
          poll = new Poll({
            _id: App.Item.pollId
          });
          return poll.fetch({
            success: function() {
              var choiceList;
              poll = Item.parsePoll(poll);
              App.Item.layout.model = poll;
              App.main.show(App.Item.layout);
              App.main.currentView.addRegions({
                vote: '#vote'
              });
              if (poll.get('userVoted')) {
                App.module('Item.Result').start();
              } else {
                choiceList = new Item.ChoiceListView({
                  collection: poll.get('choices')
                });
                choiceList.on('vote', function(choiceId) {
                  var voteObj;
                  if (choiceId == null) {
                    return alert('You must select an option to vote for');
                  }
                  voteObj = {
                    poll_id: App.Item.pollId,
                    choice: choiceId
                  };
                  App.socket.ws.emit('send:vote', voteObj);
                  return App.module('Item.Result').start();
                });
                App.main.currentView.vote.show(choiceList);
              }
              return App.socket.ws.on('vote', function(data) {
                var choice, choiceModel, index, vote, votes, _i, _j, _len, _len1, _ref, _ref1, _results;
                if (data._id !== Item.pollId) {
                  return;
                }
                _ref = data.choices;
                _results = [];
                for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
                  choice = _ref[index];
                  if (choice.vote.length > 0) {
                    choiceModel = poll.get(poll.get(choices).at(index - 1));
                    votes = new VoteCollection();
                    _ref1 = choice.votes;
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                      vote = _ref1[_j];
                      votes.add({
                        ip: vote.ip
                      });
                    }
                    _results.push(choiceModel.set('votes', votes));
                  } else {
                    _results.push(void 0);
                  }
                }
                return _results;
              });
            }
          });
        };

        return ItemController;

      })(Marionette.Controller);
      return Item.parsePoll = function(poll) {
        var choice, choiceObj, choices, vote, votes, _i, _j, _len, _len1, _ref, _ref1;
        choices = new ChoiceCollection();
        _ref = poll.get('choices');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          choice = _ref[_i];
          choiceObj = {
            text: choice.text,
            _id: choice._id
          };
          if (poll.get('userVoted')) {
            votes = new VoteCollection();
            _ref1 = choice.votes;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              vote = _ref1[_j];
              votes.add({
                ip: vote.ip
              });
            }
            choiceObj.votes = votes;
            choiceObj.totalVotes = poll.get('totalVotes');
          }
          choices.add(choiceObj);
        }
        return poll.set('choices', choices);
      };
    });
  });

}).call(this);
