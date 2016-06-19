import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.methods({
    joinConversation(userUuid, userRole) {
        console.log(userUuid, userRole);
        const userRoleId = userRole + 'Id';


        //try to find an active (isArchived==false) conversation where a complementary role is active AND ourrole is empty
        //if: found - update that conversation adding is[Role]active = true && [Role]Id = userUuid
        //else: create a new conversation

        Conversations.upsert({ [userRoleId]: null }, 
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
                               }});
    }
});
