import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { createContainer } from 'meteor/react-meteor-data';
import MatchingComponent from '../pages/Matching.jsx';

export default createContainer(({ params: { id } }) => {
  const conversationsHandle = Meteor.subscribe('currentConversation', id);
  const loading = !conversationsHandle.ready();
  const currentConversation = Conversations.findOne(id);
  const conversationExists = !loading && !!currentConversation;
  return {
    loading,
    currentConversation,
    conversationExists
  };
}, MatchingComponent);
