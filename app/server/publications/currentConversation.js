import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.publish('currentConversation', function(userUuid, userRole) {
  const otherRole = (userRole == 'bear') ? 'human' : 'bear';
  Meteor._sleepForMs(1000);
  // conversation where my userUuid is in my role and this role is active
  return Conversations.find({
    [userRole+'Id']: userUuid,
    //[otherRole+'Id']: {$ne: null},
    [userRole+'Active']: true,
    [otherRole+'Active']: true
  });
});
