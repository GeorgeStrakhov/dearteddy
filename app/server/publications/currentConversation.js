import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../imports/api/conversations.js';

Meteor.publish('currentConversation', function() {
  Meteor._sleepForMs(2000);
  //FIXME only return the right conversation instead of all!
  return Conversations.find();
});
