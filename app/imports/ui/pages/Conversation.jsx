import React from 'react';

import moment from 'moment';

/* TODO: pasha delete this */
import faker from 'faker';
/* TODO: pasha delete this */


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
            {this.props.message} <br />
            {moment(this.props.timestamp).fromNow()}
          </p>
        </div>
      )
  }
}

class Conversation extends React.Component {
  constructor(props) {
    super(props);

 //   const messages = [];

 //   for (let i = 0; i < 10; i++) {
 //     messages.push({
 //       message: faker.lorem.sentence(),
 //       key: i,
 //       timestamp: moment(now).subtract(i, 'minutes'),
 //       humanId: (i % 2) ? 333 : null,
 //       bearId: (i % 2) ? null : 222
 //     });
 //   }

    this.state = {
      //messages,
      messageInput: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      messages: [{
        message: this.state.messageInput,
        timestamp: Date.now(),
        humanId: 333
      }, ...this.state.messages],
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
          <Message {...message} />
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
