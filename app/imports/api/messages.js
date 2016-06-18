import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

//allow / deny

Messages.allow({
  insert: function(userId, doc) {
    console.log(userId, doc);
    //FIXME: only allow user to add messages to the conversation of which he is a part and to the correct role
    return true;
  }
});
