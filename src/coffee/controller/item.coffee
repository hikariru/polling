define(['jquery', 'underscore', 'backbone', 'marionette', 'app',
'models/poll', 'collections/choice', 'collections/vote',
# load submodule
'controller/item_result', 'layouts/item_result'
],
($, _, Backbone, Marionette, App, Poll, ChoiceCollection, VoteCollection) ->
  'use strict'

  App.module('Item', (Item, App, Backbone, Marionette, $, _) ->
    @startWithParent = false

    Item.addInitializer( ->
      Item.controller = new ItemController()
    )
    Item.addInitializer( ->
      App.vent.trigger('title', 'View Poll')
    )

    class ItemController extends Marionette.Controller
      initialize: ->
        # fetch
        poll = new Poll({_id: App.Item.pollId})
        poll.fetch({
          success: ->
            poll = Item.parsePoll(poll)
            App.Item.layout.model = poll

            # show
            App.main.show(App.Item.layout)
            App.main.currentView.addRegions(
              vote: '#vote'
            )

            # 投票済だったらItem.Resultに投げる
            if poll.get('userVoted')
              App.module('Item.Result').start()
            else
              choiceList = new Item.ChoiceListView(
                collection: poll.get('choices')
              )
              choiceList.on('vote', (choiceId) ->
                return  alert('You must select an option to vote for') if not choiceId?

                voteObj = {
                  poll_id: App.Item.pollId
                  choice: choiceId
                }
                App.socket.ws.emit('send:vote', voteObj)
                App.module('Item.Result').start()
              )
              App.main.currentView.vote.show(choiceList)

            # socket event
            App.socket.ws.on('vote', (data) ->
              if data._id isnt Item.pollId
                return

              for choice, index in data.choices
                if choice.vote.length > 0
                  choiceModel = poll.get(poll.get(choices).at(index - 1))
                  votes = new VoteCollection()
                  for vote in choice.votes
                    votes.add({ip: vote.ip})
                  choiceModel.set('votes', votes)
            )
        })

    Item.parsePoll = (poll) ->
      choices = new ChoiceCollection()
      for choice in poll.get('choices')
        choiceObj = {text: choice.text, _id: choice._id}
        if poll.get('userVoted')
          votes = new VoteCollection()
          for vote in choice.votes
            votes.add({ip: vote.ip})

          choiceObj.votes = votes
          choiceObj.totalVotes = poll.get('totalVotes')

        choices.add(choiceObj)

      poll.set('choices', choices)
  )
)
