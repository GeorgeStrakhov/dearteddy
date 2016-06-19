import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Conversations } from '../../api/conversations.js';
import { Messages } from '../../api/messages.js';
import { Bearphrases } from '../../api/bearphrases.js';
import { createContainer } from 'meteor/react-meteor-data';
import ConversationComponent from '../pages/Conversation.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('currentConversation', Session.get('user-uuid'), Session.get('user-role'));
  
  const messagesHandle = Meteor.subscribe('conversationMessages', id);
  const loading = !messagesHandle.ready();
  const conversation = Conversations.findOne();
  const messages = Messages.find({conversationId: id}, {sort: {timestamp: -1}}).fetch();
  const conversationExists = !loading && !!conversation;
  //FIXME - security: we need a way to check if this user indeed has this role
  const userRole = Session.get('user-role');
  const userUuid = Session.get('user-uuid');

  const bearPhrasesHandle = Meteor.subscribe('bearPhrases');
  const bearPhrases = Bearphrases.find().fetch();
  
  return {
    loading,
    messages,
    userRole,
    userUuid,
    conversationExists,
    bearPhrases,
    conversation: conversationExists ? conversation : null,
  };
}, ConversationComponent);
