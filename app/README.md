# Dear Teddy

## DB structure

* conversation
    - isArchived (after human says "done" or after 30 minutes of inactivity)
    - humanId
    - ratingFromHuman (0-5)
    - isHumanActive (flag updated every few seconds server-side on connection status, so that we don't drop bears into conversations where the human is already gone)
    - bearId - arr
    - isBearActive
    - ratingFromBear (0-5)
    - createdAt
    - flaggedAt
    - nominatedAt
    - isHumanTyping
    - isBearTyping
* message (belongs to a conversation)
    - timestamp
    - text
    - humanId (if human)
    - bearId (if bear)
    - bearphraseId (if bear)
* bearphrase
    - text
    - addedAt
    - useCount

## Technical Scenarios

* New user comes and chooses a role, nobody is there.
* New user comes and chooses, no conversation is currently. 
* User who has been there in the past and didn't close a previous conversation comes back.
* User:human closes the app without ending the conversation 
* User:bear closes the app without ending the conversation

## Subscriptions and Publications

* `myCurrentConversation` - subscribes to Conversation that has me as one of the users
* `conversationMessages` - subscribes to all Messages that belong to my current conversation
* `bearphrases` - (for role:bear only) subscribes to all available Bearphrases

## Deployment

We are hosting the app on Heroku for the time being.

* make sure to have toolbelt set up & everything
* `git remote add heroku https://git.heroku.com/dearteddy-one.git`
* to deploy: `git subtree push --prefix app heroku master` (subtree because our app lives inside `app`)

For more details on how to set it all up, read [this](http://justmeteor.com/blog/deploy-to-production-on-heroku/)
