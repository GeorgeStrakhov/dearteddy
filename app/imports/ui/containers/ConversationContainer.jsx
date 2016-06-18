import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { Messages } from '../../api/messages.js';
import { createContainer } from 'meteor/react-meteor-data';
import ConversationComponent from '../pages/Conversation.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('currentConversation', id);
  const messagesHandle = Meteor.subscribe('conversationMessages', id);
  const loading = !conversationsHandle.ready();
  const conversation = Conversations.findOne(id);
  const messages = Messages.find({conversationId: id}).fetch();
  const conversationExists = !loading && !!conversation;
  return {
    loading,
    conversation,
    messages,
    conversationExists
  };
}, ConversationComponent);
