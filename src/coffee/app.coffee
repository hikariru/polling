define(['jquery', 'underscore', 'backbone', 'marionette'
], ($, _, Backbone, Marionette) ->
  'use strict'

  # Application instance
  App = new Marionette.Application()

  App.addRegions({
    'header': '#page-header'
    'main': '#main-content'
  })

  App.on('start', ->
    Backbone.history.start({ pushState: true })
  )

  return App
)
