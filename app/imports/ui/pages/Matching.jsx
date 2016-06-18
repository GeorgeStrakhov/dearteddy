import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Session } from 'meteor/session';
import { Conversations } from '../../api/conversations.js';

class Matching extends Component {

  role() {
    let role = (this.props.params.role == 'human') ? 'bear' : 'human';
    return role;
  }
  
  render() {
    //on render -> send a call to the server asking to put us into a relevant conversation
    Meteor.call('joinConversation', Session.get('user-uuid'), this.role());

    //FIXME below is definitely not the right way, but works for now. need to figure out a way to reactively redirect user depending on the state of subscription
    let c = null;
    let i = setInterval(function(){
      c = Conversations.findOne();
      if(c){
        browserHistory.push('/conversations/'+c._id);
        clearInterval(i);
      }
    }, 500);

    //render waiting page
    return (
        <div className="page matching-page">
          <h3>Sit tight, your {this.role()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
