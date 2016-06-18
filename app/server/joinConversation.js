import { Meteor } from 'meteor/meteor';

Meteor.methods({
  joinConversation(userUuid, userRole) {
    console.log(userUuid, userRole);
  }
});
