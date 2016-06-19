import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Session } from 'meteor/session';
import { Conversations } from '../../api/conversations.js';

class Matching extends Component {

  componentDidMount() {

    //on render -> send a call to the server asking to put us into a relevant conversation
    Meteor.call('joinConversation', Session.get('user-uuid'), Session.get('user-role'));

    //FIXME below is definitely not the right way, but works for now. need to figure out a way to reactively redirect user depending on the state of subscription
    let c = null;
    let i = setInterval(function(){
      c = Conversations.findOne();
      if(c){
        browserHistory.push('/conversations/'+c._id);
        clearInterval(i);
      }
    }, 500);

  }

  lookingFor() {
    let lookingFor = (Session.get('user-role') == 'human') ? 'bear' : 'human';
    return lookingFor;
  }

  render() {

    //render waiting page
    return (
        <div className="page matching-page">
          <h3>Sit tight, your {this.lookingFor()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
