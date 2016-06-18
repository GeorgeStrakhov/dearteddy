import { Meteor } from 'meteor/meteor';
import { Messages } from '../../imports/api/messages.js';

Meteor.publish('conversationMessages', function(conversationId) {
  return Messages.find({conversationId: conversationId});
});
