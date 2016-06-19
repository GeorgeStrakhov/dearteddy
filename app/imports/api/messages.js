import { Mongo } from 'meteor/mongo';
import { Conversations } from './conversations.js';

export const Messages = new Mongo.Collection('messages');

//allow / deny

Messages.allow({
  insert: function(userId, doc) { 
    const userRole = (doc.humanId) ? 'human' : 'bear';
    const userUuid = doc[userRole+'Id'];
    //only allow user to add messages to the conversation of which he is a part and to the correct role
    //1. find the right conversation from the ones that are not active
    const c = Conversations.find({
      [userRole+'Id']: userUuid,
      isArchived: {$ne: true}
    }).fetch();
    if(c.length > 0) {
      //3. if found - set humanRole or bearRole to active and return true
      Conversations.update(c._id, {$set: {[userRole+'Active']: true}});
      return true;
    } else {
      console.log('Oh, no!!!! they are coming after us');
      return false;
    }
  }
});
