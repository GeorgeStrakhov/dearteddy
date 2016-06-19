import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.methods({
    endConversation(conversationId) {
        //TODO: make sure the user issuing the call belongs to the conversation
        Conversations
            .update(conversationId, {
                $set: {
                    isArchived: true,
                    humanActive: false,
                    bearActive: false
                }
            });
    },

    leaveConversation(conversationId, role) {
        Conversations
            .update(conversationId, {
                $set: {
                    [role + 'Active']: false,
                    [role + 'Id']: null,
                }
            });
    }
});
