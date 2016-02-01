(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'models/poll'], function(Backbone, Poll) {
    'use strict';
    var PollCollection;
    PollCollection = (function(_super) {
      __extends(PollCollection, _super);

      function PollCollection() {
        return PollCollection.__super__.constructor.apply(this, arguments);
      }

      PollCollection.prototype.model = Poll;

      PollCollection.prototype.url = '/polls/polls';

      PollCollection.prototype.parse = function(resp) {
        return resp;
      };

      return PollCollection;

    })(Backbone.Collection);
    return PollCollection;
  });

}).call(this);
