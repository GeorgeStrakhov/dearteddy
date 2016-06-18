import { Messages } from '../imports/api/messages.js'
import { Conversations } from '../imports/api/conversations.js'
import '../imports/api/bearphrases.js'

import './methods/joinConversation.js';

import './publications/currentConversation.js';
import './publications/conversationMessages.js';

import '../imports/startup/server/fixtures.js';

// Meteor.publish('conversations', () => Messages.find());
// Meteor.publish('messages', () => Conversations.find());