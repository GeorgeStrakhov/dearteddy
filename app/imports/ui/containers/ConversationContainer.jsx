import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { Messages } from '../../api/messages.js';
import { createContainer } from 'meteor/react-meteor-data';
import ConversationComponent from '../pages/Conversation.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('myCurrentConversation', id);
  const messagesHandle = Meteor.subscribe('conversationsMessages', id);
  const loading = !conversationsHandle.ready();
  const conversation = Conversations.findOne(id);
  const messages = Messages.find({conversationId: id}).fetch();
  const conversationExists = !loading && !!conversation;
  
  return {
    loading,
    conversation,
    messages,
    conversationExists,
    conversations: conversationExists ? conversation.fetch() : [],
  };
}, ConversationComponent);
