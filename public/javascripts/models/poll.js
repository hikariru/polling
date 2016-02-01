(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'collections/choice'], function(Backbone, ChoiceCollection) {
    'use strict';
    var Poll;
    Poll = (function(_super) {
      __extends(Poll, _super);

      function Poll() {
        return Poll.__super__.constructor.apply(this, arguments);
      }

      Poll.prototype.defaults = {
        question: ''
      };

      Poll.prototype.url = function() {
        var baseUrl;
        baseUrl = '/polls';
        return "" + baseUrl + "?pollID=" + (this.get('_id'));
      };

      Poll.prototype.create = function() {
        if (this._isValid()) {
          Backbone.sync.apply(this, [
            'create', this, {
              url: '/polls'
            }
          ]);
          return this.trigger('create:success');
        }
      };

      Poll.prototype._isValid = function() {
        if (this.get('question').length === 0) {
          this.trigger('create:error', 'You must enter a question');
          return false;
        }
        this._removeEmptyChoices();
        if (this.get('choices').length < 2) {
          this.trigger('create:error', 'You must enter at least two choices');
          return false;
        }
        return true;
      };

      Poll.prototype._removeEmptyChoices = function() {
        var choices;
        choices = this.get('choices');
        return this.set('choices', choices.filter(function(choice) {
          return choice.get('text').length > 0;
        }));
      };

      return Poll;

    })(Backbone.Model);
    return Poll;
  });

}).call(this);
