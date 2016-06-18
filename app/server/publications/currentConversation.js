import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

console.log('conv');
console.log(Conversations.find().count());

Meteor.publish('currentConversation', function() {
  Meteor._sleepForMs(2000);
  return Conversations.find();
});
