# Dear Teddy

## DB structure

* conversation
    - humanId
    - ratingFromHuman (0-5)
    - bearId
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

## Deployment

We are hosting the app on Heroku for the time being.

* make sure to have toolbelt set up & everything
* `git remote add heroku https://git.heroku.com/dearteddy-one.git`
* to deploy: `git subtree push --prefix app heroku master` (subtree because our app lives inside `app`)

For more details on how to set it all up, read [this](http://justmeteor.com/blog/deploy-to-production-on-heroku/)
