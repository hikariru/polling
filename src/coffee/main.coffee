require(['marionette', 'app', 'templates', 'router', 'controller',
# load modules
'controller/list', 'layouts/list',
'controller/item', 'layouts/item',
'controller/new', 'layouts/new',
'socket'],
(Marionette, App, JST, Router, Controller) ->
  'use strict'

  #start router
  App.addInitializer( ->
    new Router(
      controller: new Controller()
    )
  )

  # use JST templates
  App.addInitializer( ->
    Marionette.Renderer.render = (template, data) ->
      throw "Template #{template} not found!" if !JST[template]
      return JST[template](data)
  )

  App.start()
)
