import React from 'react';
import moment from 'moment';
import Typeahead from 'react-bootstrap-typeahead';
import Loading from './Loading.jsx';

import { Messages } from '../../api/messages.js';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMessageChange(selected) {
    if (selected.length) {
      Messages
        .insert({
          text: selected[0].text,
          [this.props.userRole + 'Id']: this.props.userUuid,
          timestamp: Date.now(),
          conversationId: this.props.conversation._id,
          bearphraseId: selected[0].id
        });
    }
  }

  render() {
    if (this.props.bearPhrases) {
      return (
        <Typeahead
          onChange={this.handleMessageChange.bind(this)}
          options={this.props.bearPhrases}
          labelKey="text"
        />
      )
    } else {
      return <Loading />
    }

  }
}

export default MessageInput;
