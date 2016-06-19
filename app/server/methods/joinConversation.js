import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.methods({
    joinConversation(userUuid, userRole) {
        console.log(userUuid, userRole);
        const userRoleId = userRole + 'Id';

        Conversations.upsert({ [userRoleId]: null }, 
                             { $set: { [userRoleId]: userUuid },
                               $setOnInsert: {
                                   humanId: ((userRole === 'human') ? userUuid : null),
                                   bearId: ((userRole === 'bear') ? userUuid : null),
                                   isArchived: false,
                                   isHumanActive: (userRole === 'human'),
                                   isBearActive: (userRole === 'bear'),
                                   createdAt: new Date()
                               }});
    }
});
