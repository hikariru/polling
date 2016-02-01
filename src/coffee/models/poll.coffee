define(['backbone', 'collections/choice'], (Backbone, ChoiceCollection) ->
  'use strict'

  class Poll extends Backbone.Model
    defaults:
      question: ''

    url: ->
      baseUrl = '/polls'
      "#{baseUrl}?pollID=#{@get('_id')}"

    create: ->
      if @_isValid()
        Backbone.sync.apply(this, ['create', this, {url: '/polls'}])
        @trigger('create:success')

    # helper method
    _isValid: ->
      if @get('question').length is 0
        @trigger('create:error', 'You must enter a question')
        return false

      @_removeEmptyChoices()
      if @get('choices').length < 2
        @trigger('create:error', 'You must enter at least two choices')
        return false

      return true

    _removeEmptyChoices: ->
      choices = @get('choices')
      @set('choices', choices.filter((choice) ->
        choice.get('text').length > 0
      ))


  return Poll
)
