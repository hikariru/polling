define(['jquery', 'marionette', 'app'], ($, Marionette, App) ->
  'use strict'

  # ページヘッダ
  class HeaderView extends Marionette.ItemView
    template: 'header'
    tagName: 'h1'

    initialize: =>
      App.vent.on('title', (title) =>
        document.title = title
        @$el.text(title)
      )

  return HeaderView
)
