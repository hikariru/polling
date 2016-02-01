(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    'use strict';
    var Vote;
    Vote = (function(_super) {
      __extends(Vote, _super);

      function Vote() {
        return Vote.__super__.constructor.apply(this, arguments);
      }

      Vote.prototype.defaults = {
        ip: ''
      };

      return Vote;

    })(Backbone.Model);
    return Vote;
  });

}).call(this);
