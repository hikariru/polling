(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'collections/vote'], function(Backbone, VoteCollection) {
    'use strict';
    var Choice;
    Choice = (function(_super) {
      __extends(Choice, _super);

      function Choice() {
        return Choice.__super__.constructor.apply(this, arguments);
      }

      Choice.prototype.defaults = {
        text: ''
      };

      return Choice;

    })(Backbone.Model);
    return Choice;
  });

}).call(this);
