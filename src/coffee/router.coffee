define(['marionette'], (Marionette) ->
  'use strict'

  class Router extends Marionette.AppRouter
    appRoutes:
      'polls': 'list'
      'poll/:pollId': 'item'
      'new': 'new'

      '*notFound': 'default'

  return Router
)
