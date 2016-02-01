define(['backbone', 'models/poll'], (Backbone, Poll) ->
  'use strict'

  class PollCollection extends Backbone.Collection
    model: Poll

    url: '/polls/polls'
    parse: (resp) ->
      return resp

  return PollCollection
)
