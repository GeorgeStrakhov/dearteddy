import React, { Component } from 'react';
import { Session } from 'meteor/session';
// import { Router } from 'react-router'
import { browserHistory } from 'react-router'

class Matching extends Component {

  lookingFor() {
    let lookingFor = (this.props.params.role == 'human') ? 'bear' : 'human';
    return lookingFor;
  }
  
  render() {
    console.log("entered render() in Matching.jsx")
    //on render -> send a call to the server asking to put us into a relevant conversation
    Meteor.call('joinConversation',
                 Session.get('user-uuid'), 
                 this.props.params.role,   
                 function(error, conversationId){
                    console.log("got a callback from joinConversation with ", conversationId)
                    if (conversationId) {
                      console.log("routing to '/chats/"+conversationId+"'")
//                      console.log("this is ", this)
                      browserHistory.push('/chats/'+conversationId)
//                      this.history.pushState(null, 'chats/'+conversationId)
                    }
                  });
    //render waiting page
    return (
        <div className="page matching-page">
        <h3>Sit tight, your {this.lookingFor()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
