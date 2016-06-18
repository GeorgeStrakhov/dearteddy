import React, { Component } from 'react';
import { Session } from 'meteor/session';

class Matching extends Component {

  role() {
    let role = (this.props.params.role == 'human') ? 'bear' : 'human';
    return role;
  }
  
  render() {
    //on render -> send a call to the server asking to put us into a relevant conversation
    Meteor.call('joinConversation', Session.get('user-uuid'), this.role());

    //render waiting page
    return (
        <div className="page matching-page">
        <h3>Sit tight, your {this.role()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
