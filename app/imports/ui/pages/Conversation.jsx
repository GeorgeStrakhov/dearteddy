import React from 'react';
import MessageList from '../components/MessageList.jsx';
import MessageInputHuman from '../components/MessageInputHuman.jsx';
import MessageInputBear from '../components/MessageInputBear.jsx';
import Loading from '../components/Loading.jsx';
import { Link } from 'react-router';

class Conversation extends React.Component {

  endConversation(event) {
  event.preventDefault();
  Meteor.call('endConversation', this.props.conversation._id);

    }
    
  render() { 
    const { loading, messages, conversation, userUuid, userRole, bearPhrases } = this.props;

    const MessageInput = (Session.get('user-role') == 'bear') ? 
      <MessageInputBear {...this.props} /> : 
      <MessageInputHuman {...this.props} />;

    let Body;

    if (conversation) {
      Body = (
        <div>
          <h1>ID: #{conversation._id}</h1>
          {MessageInput}
          <Link to="/" onClick={this.endConversation.bind(this)} className="btn btn-default">End conversation</Link>
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
