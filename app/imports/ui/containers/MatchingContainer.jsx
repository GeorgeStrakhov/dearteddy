import { Meteor } from 'meteor/meteor';
import { Conversations } from '../../api/conversations.js';
import { createContainer } from 'meteor/react-meteor-data';
import MatchingComponent from '../pages/Matching.jsx';

export default createContainer(() => {
  const conversationsHandle = Meteor.subscribe('currentConversation', Session.get('user-uuid'), Session.get('user-role'));
  const loading = !conversationsHandle.ready();
  const currentConversation = Conversations.findOne();
  const conversationExists = !loading && !!currentConversation;

  return {
    loading,
    currentConversation,
    conversationExists
  };
}, MatchingComponent);
