import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';
import { Messages } from '../../imports/api/messages.js';

Meteor.methods({
    joinConversation(userUuid, userRole) {
        const userRoleId = userRole + 'Id';

        //try to find an active (isArchived==false) conversation where a complementary role is active AND ourrole is empty
        //if: found - update that conversation adding is[Role]active = true && [Role]Id = userUuid
        //else: create a new conversation

        Conversations.upsert({ [userRoleId]: null, isArchived: false }, 
                             { $set: {
                                 [userRoleId]: userUuid,
                                 [userRole+'Active']: true
                               },
                               $setOnInsert: {
                                   humanId: ((userRole === 'human') ? userUuid : null),
                                   bearId: ((userRole === 'bear') ? userUuid : null),
                                   isArchived: false,
                                   humanActive: (userRole === 'human'),
                                   bearActive: (userRole === 'bear'),
                                   createdAt: new Date()
                               }}, function(error, result){
                                  if(result && result.insertedId) {
                                    Messages.insert({
                                      text: 'Hey, what\'s bothering you?',
                                      bearId: '0000',
                                      timestamp: Date.now(),
                                      conversationId: result.insertedId,
                                      bearphraseId: '0000'
                                    });
                                  }
                               });
    }
});
