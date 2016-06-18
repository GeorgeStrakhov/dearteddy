import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';


// joinConversation // Promise

// joinConversation
//     .then((conversation) => {

//     });

Meteor.methods({
    joinConversation(userUuid, userRole) {
        const userRoleId = userRole + 'Id';

        return Conversations
            .update({ [userRoleId]: null }, 
                { $set: { [userRoleId]: userUuid } })
            .then((result) => {
                if (result) {
                    return result;
                } else {
                    return Conversations
                        .insert({
                            humanId: ((userRole === 'human') ? userUuid : null),
                            bearId: ((userRole === 'bear') ? userUuid : null),
                            isArchived: false,
                            isHumanActive: (userRole === 'human'),
                            isBearActive: (userRole === 'bear'),
                            createdAt: new Date()
                        });
                }
            })
            .then((result) => result)
            .catch((error) => console.error(error));
        // check whether there's conversation with a complementary role
        // if there is one, assign this userUuid to that conversation's appropriate roleId,
        // lookingFor = (userRole == 'human') ? 'bear' : 'human'
        // let conversationObject = null

        // conversationObject = Conversations.findOne();
        // console.log('###', conversationObject)

        // if (lookingFor == 'human') {
        //     console.log('trying to match with a human, looking for an extant conversation without a bear in it");

        //     //conversationObject = Conversations.findOne({bearId:{$empty:true}})
        //     if (conversationObject) {
        //         console.log("found one: ", conversationObject._id, " and trying to add our (bear) user there.");
        //         Conversations
        //         .update(conversationObject._id, {$set: {bearId: userUuid}})
        //         .then((result) => console.log(result))
        //         .catch((error) => console.log(error))
        //     }
        // }


        // if (lookingFor == 'bear') {
        //     console.log("trying to match with a bear");
        //     conversationObject = Conversations.findOne({humanId: null})
        //     if (conversationObject) {
        //         Conversations.update(conversationObject._id, {$set: {humanId: userUuid}});
        //     }
        // }

        // if there isn't, create one.

        // if (conversationObject == null) {
        //     console.log("haven't found a conversation yet, so let's make a new one.");
        //     conversationObject = Conversations.insert({
        //         humanId: ((userRole == 'human') ? userUuid : null),
        //         bearId: ((userRole == 'bear') ? userUuid : null),
        //         isArchived: false,
        //         isHumanActive: (userRole === 'human'),
        //         isBearActive: (userRole === 'bear'),
        //         createdAt: new Date(),
        //     })
        // }
        // console.log("conversationObject: ", conversationObject);
        // return conversationObject._id

    }
});
