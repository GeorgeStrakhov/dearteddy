import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js'
import { Conversations } from '../api/conversations.js'
import { Bearphrases } from '../api/bearphrases.js'

// App component - represents the whole app
class App extends Component {
 
  render() {
    return (
      <div className="container">
        <header>
          <Link to={`/`}>
            <h1>Dear Teddy</h1>
          </Link>
          <p className="lead"><em>anonymous p2p life debugging</em></p>
          <hr />
          {this.props.children}
        </header>
      </div>
    );
  }
}

App.propTypes = {
  Messages: PropTypes.array.isRequired, //FIXME why does this give a warning?
};
 
export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch(),
  };
}, App);
