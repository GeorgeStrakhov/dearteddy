import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js'


Meteor.methods({
    joinConversation(userUuid, userRole) {

        console.log(userUuid, userRole);

        userRole = (userRole == 'human') ? 'human' : 'bear';
        const lookingFor = (userRole == 'human') ? 'bear' : 'human';

        let conversation = Conversations.find({[lookingFor+'id']: null}).fetch();

        if(conversation.length == 0) {
          conversation = Conversations.insert({
            humanId: ((userRole == 'human') ? userUuid : null),
            bearId: ((userRole == 'bear') ? userUuid : null),
            isArchived: false,
            isHumanActive: ((userRole == 'human') ? true : false),
            isBearActive:  ((userRole == 'bear') ? true : false),
            createdAt: new Date(),
          });
        } else {
          Conversations.update(conversation._id, {$set: {[userRole+'id']: userUuid}});
        }

        return conversation._id;

  }
});
