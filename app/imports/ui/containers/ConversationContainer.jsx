import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { Messages } from '../../api/messages.js';
import { createContainer } from 'meteor/react-meteor-data';
import ConversationComponent from '../pages/Conversation.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('myCurrentConversation', id);
  const messagesHandle = Meteor.subscribe('conversationsMessages', id);
  const loading = !conversationsHandle.ready();
  const converstion = Conversations.findOne(id);
  const messages = Messages.find({conversationId: id}).fetch();
  const converstionExists = !loading && !!converstion;
  return {
    loading,
    converstion,
    messages,
    converstionExists,
    conversations: converstionExists ? converstion.fetch() : [],
  };
}, ConversationComponent);
