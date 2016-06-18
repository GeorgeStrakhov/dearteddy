import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { createContainer } from 'meteor/react-meteor-data';
import Conversation from '../pages/Conversation.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('conversations', id);
  const loading = !conversationsHandle.ready();
  const converstion = Conversations.findOne(id);
  const converstionExists = !loading && !!converstion;
  return {
    loading,
    converstion,
    converstionExists,
    conversations: converstionExists ? converstion.fetch() : [],
  };
}, Conversation);
