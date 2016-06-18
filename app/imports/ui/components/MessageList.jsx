import React from 'react';
import Message from './Message.jsx';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Messages = this.props.messages
      .map((message) => (
          <Message {...message} key={message._id} />
        ));

    return (
      <div className="well">
        {Messages}      
      </div>
    )
  }

}

export default Conversation;