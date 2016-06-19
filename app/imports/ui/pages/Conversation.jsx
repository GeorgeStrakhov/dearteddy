import React from 'react';
import MessageList from '../components/MessageList.jsx';
import MessageInput from '../components/MessageInput.jsx';
import Loading from '../components/Loading.jsx';

class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageInput: ''
    };

  }

  render() { 
    const { loading, messages, conversation, userUuid, userRole } = this.props;

    let Body;

    console.log(conversation);

    if (conversation) {
      Body = (
        <div>
          <h1>ID: #{conversation._id}</h1>
          <MessageInput conversation={conversation} userUuid={userUuid} userRole={userRole}/>
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
