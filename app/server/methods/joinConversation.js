import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js'


Meteor.methods({
    joinConversation(userUuid, userRole) {
        // check whether there's conversation with a complementary role
        // if there is one, assign this userUuid to that conversation's appropriate roleId,
        roleToMatch = (userRole == 'human') ? 'bear' : 'human'
        let conversationId = null
        if (roleToMatch == 'human') {
            conversationId = Conversations.findOne({isArchived: false, humanId: null})
        }
        
        if (roleToMatch == 'bear') {
            conversationId = Conversations.findOne({isArchived: false, bearId: null})
        }

        // if there isn't, create one.
        if (conversationId == null) {
            conversationId = Conversations.insert(
                {humanId: ((userRole == 'human') ? userUuid : null),
                 bearId: ((userRole == 'bear') ? userUuid : null),
                 isArchived: false,
                 isHumanActive: ((userRole == 'human') ? true : false),
                 isBearActive:  ((userRole == 'bear') ? true : false),
                 createdAt: new Date(),
                })
        }
        console.log(userUuid, userRole);
        return conversationId

  }
});
