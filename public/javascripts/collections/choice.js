(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'models/choice'], function(Backbone, Choice) {
    'use strict';
    var ChoiceCollection;
    ChoiceCollection = (function(_super) {
      __extends(ChoiceCollection, _super);

      function ChoiceCollection() {
        return ChoiceCollection.__super__.constructor.apply(this, arguments);
      }

      ChoiceCollection.prototype.model = Choice;

      return ChoiceCollection;

    })(Backbone.Collection);
    return ChoiceCollection;
  });

}).call(this);
