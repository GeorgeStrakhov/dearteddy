import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';
import { Conversations } from '../../api/conversations.js';

class Matching extends Component {
  componentDidMount() {
    Meteor.call('joinConversation', Session.get('user-uuid'), Session.get('user-role'));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentConversation) {
      browserHistory.push('/conversations/' + nextProps.currentConversation._id);
    }
  }

  lookingFor() {
    let lookingFor = (Session.get('user-role') == 'human') ? 'bear' : 'human';
    return lookingFor;
  }

  render() {
    return (
        <div className="page matching-page">
          <h3>Sit tight, your {this.lookingFor()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
