import React from 'react';
import moment from 'moment';
import Loading from './Loading.jsx';

import { Messages } from '../../api/messages.js';

class MessageInputHuman extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageInput: ''
    };
  }

  handleMessageChange(e) {
    this.setState({
      messageInput: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    Messages
      .insert({
        text: this.state.messageInput,
        [this.props.userRole + 'Id']: this.props.userUuid,
        timestamp: Date.now(),
        conversationId: this.props.conversation._id
      });

    this.setState({
      messageInput: ''
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

export default MessageInputHuman;
