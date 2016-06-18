import React from 'react';
import moment from 'moment';
import { Session } from 'meteor/session';

import { Messages } from '../../api/messages.js';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageInput: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const role = 'bearId';

    Messages
      .insert({
        text: this.state.messageInput,
        timestamp: Date.now(),
        conversationId: this.props.conversation._id,
        [role]: Session.get('user-uuid')
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
    return (
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
      )
  }
}

export default MessageInput;