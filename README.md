<img src="https://raw.githubusercontent.com/GeorgeStrakhov/dearteddy/master/branding/dearteddy.svg" width="30%" />

## Problem

We all need somebody to talk to every now and then. The simple act of talking to somebody who is listening and supporting can be helpful in a variety of situations: from when you need to make an important decision about your relationship to when you just need to find a bug in your code.

## Inspiration

* [Debugging Teddy Bear](http://story.fund/post/114720918282/debugging-teddy-bear)
* [Eliza](https://en.wikipedia.org/wiki/ELIZA)
* [Teddy Bear Cops Programme](https://en.wikipedia.org/wiki/Teddy_bear#Teddy_Bear_Cops_program) 

## Idea

*Dear Teddy*

* Anonymous chat app for asymmetric peer-to-peer therapy
* Universal Problem Solver // [General Problem Solver](https://en.wikipedia.org/wiki/General_Problem_Solver) for the era of social computing
* "Dear Teddy, please make everything alright"
* Debug your life

## How it works (scenarios)

1. You go to a website or launch a mobile app.
2. Choose whether you need to talk to a teddy bear (role:user) or want to be somebody's teddy bear (role:bear).
3. Wait for a few seconds for a match (other random online user who is willing to perform an opposite role).
4. You are dropped into a conversation (chat) with pre-filled beginning: Teddy said: "Hey, what's bothering you?"
5. From there on the user (role:user) can type her messages and send them to the bear (role:bear)
6. To prevent abuse, the bear (role:bear) can only reply with messages from a large number of pre-defined options, such as:
    * I understand.
    * I wish I could give you a hug right now!
    * Where could you have made a mistake?
    * I am so sorry to hear that.
    * Tell me more.
    * What do you think are your options?
    * And how about option B?
    * Have you tried talking to somebody else about it?
    * How old are you?
    * How old is he?
    * Hold on, I'll be back in a minute.
    * I think you really need to go talk to a doctor...
    * What does your mother think about it?
    * (plus various positive emojis)
    * ...
7. At any point both user and bear can leave the conversation (which returns them to a role-choosing screen).
    * if  the user (role:user) leaves the conversation first, then a message is displayed to the bear (as if from the user): "Thank you, you've helped a lot!"
    * if the bear (role:bear) leaves the conversation first, then a message is displayed to the user first ("Hmm, let me think.") and then as soon as a new bear is available he is dropped into the conversation (and asked to read the history of the conversation before continuing).
8. Before leaving the conversation each is asked to rate his experience (0-5 stars and leave a comment).

## Technology Stack

* Meteor
* Angular
* Ionic

Useful Tutorials & Links:

* http://www.angular-meteor.com/tutorials/socially/angular1/bootstrapping
* https://www.meteor.com/tutorials/angular/creating-an-app
* http://info.meteor.com/blog/whatsapp-with-meteor-angular-and-ionic

## Glossary

* User - created every time with a new session.
* Conversation - users are assigned to a conversation. One conversation per user at a time.
* Message - single saying in a conversation. Belongs to conversation and user.
* Phrase - one of the large number of pre-defined sayings that bear may say.

## Routes & Pages

* `/` - home. choose whether you want to be a bear or need a bear or go to about to find out more. When choice is made, we create a new user, assign the right role to him / her and redirect to the matching page.
* `/matching` - loading page that is displayed while we are waiting for a match for a current user.
* `/conversation/:conversationId` - single conversation page. Protected: available only to the users that are currently assigned to this conversation and admins. Displays the history (chat) of the conversation. And for the users - message entry form (freeform for user and search and choose from pre-defined for bear) as well as "Leave conversation" button.
* `/about` - static page with some description about the project and contact form
