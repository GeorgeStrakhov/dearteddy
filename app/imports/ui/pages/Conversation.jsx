import React from 'react';
import moment from 'moment';

import { Messages } from '../../api/messages.js';

class Message extends React.Component {
  render() {
    let className = '';
    
    const user = {};
    
    if (this.props.humanId) {
      className += 'text-right ';
      user.type = 'Human';
    } else {
      className += 'text-left ';
      user.type = 'Bear'; 
    }

    return (
        <div className={className}>
          <p>
            <span className="text-success">{user.type}</span> <br />
            {this.props.text} <br />
            {moment(this.props.timestamp).fromNow()}
          </p>
        </div>
      )
  }
}

class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageInput: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    Messages
      .insert({
        text: this.state.messageInput,
        timestamp: Date.now(),
        conversationId: this.props.params.id
      });

    this.setState({
      messageInput: ''
    });
  }

  handleMessageChange(e) {
    this.setState({
      messageInput: e.target.value
    });
  }

  render() {
    const Messages = this.props.messages
      .map((message) => (
          <Message {...message} key={message._id} />
        ));

    return (
      <div className="well">
        <h1>This is conversation #{this.props.params.id}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className="input-group form-group">
            <input 
              className="form-control"
              type="text"
              onChange={this.handleMessageChange.bind(this)}
              value={this.state.messageInput}
              placeholder="Oh baby a triple" />
            <span className="input-group-btn">
              <button className="btn btn-default">Send</button>
            </span>
          </div>

        </form>
        {Messages}
      </div>
    )
  }

}

export default Conversation;
