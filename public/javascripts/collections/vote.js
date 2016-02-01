(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'models/vote'], function(Backbone, Vote) {
    'use strict';
    var VoteCollection;
    VoteCollection = (function(_super) {
      __extends(VoteCollection, _super);

      function VoteCollection() {
        return VoteCollection.__super__.constructor.apply(this, arguments);
      }

      VoteCollection.prototype.model = Vote;

      return VoteCollection;

    })(Backbone.Collection);
    return VoteCollection;
  });

}).call(this);
