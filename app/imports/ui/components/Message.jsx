import React from 'react';
import moment from 'moment';

export default class Message extends React.Component {
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