(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'app', 'views/item/choice_list'], function($, _, Backbone, Marionette, App) {
    'use strict';
    return App.module('Item', function(Item, App, Backbone, Marionette, $, _) {
      var ItemLayout;
      ItemLayout = (function(_super) {
        __extends(ItemLayout, _super);

        function ItemLayout() {
          return ItemLayout.__super__.constructor.apply(this, arguments);
        }

        ItemLayout.prototype.template = 'item';

        return ItemLayout;

      })(Marionette.LayoutView);
      return Item.layout = new ItemLayout();
    });
  });

}).call(this);
