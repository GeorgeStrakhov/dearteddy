import React from 'react';
import MessageList from '../components/MessageList.jsx';
import MessageInputHuman from '../components/MessageInputHuman.jsx';
import MessageInputBear from '../components/MessageInputBear.jsx';
import Loading from '../components/Loading.jsx';
import { Link, browserHistory } from 'react-router';

class Conversation extends React.Component {

  endConversation(event) {
    event.preventDefault();
    Meteor.call('endConversation', this.props.conversation._id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.conversation) {
      //flag to remember that we once had a conversation here
      this.hasConversation = true;
    } else {
      if(this.hasConversation == true) {
        //so we lost the current conversation subscription that we once had: probably the partner left
        browserHistory.push('/');
      }
    }
  }

  render() { 
    const { loading, messages, conversation, userUuid, userRole, bearPhrasesg } = this.props;

    const MessageInput = (Session.get('user-role') == 'bear') ? 
    <MessageInputBear {...this.props} /> : 
    <MessageInputHuman {...this.props} />;

    let Body;

    console.log(conversation);

    if (conversation) {
      Body = (
        <div>
        <h1>ID: #{conversation._id}</h1>
        {MessageInput}
        <button 
          onClick={this.endConversation.bind(this)}>
          Leave Conversation
        </button>
        <MessageList messages={messages} />
        </div>
        );
    } else {
      Body = <Loading />
    }

    return Body;
  }
}

Conversation.propTypes = {
  conversation: React.PropTypes.object,
  messages: React.PropTypes.array
}

export default Conversation;
