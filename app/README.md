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
    - useCount
