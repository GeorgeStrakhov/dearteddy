import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.methods({
    endConversation(conversationId) {
      //TODO: make sure the user issuing the call belongs to the conversation
      Conversations.update(
        conversationId,
        {$set: {isArchived: true}},
      )
    }
});
