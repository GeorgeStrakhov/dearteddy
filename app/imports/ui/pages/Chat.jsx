import React from 'react';

class Chat extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Hey</h1>
      </div>
    )
  }

}

export default Chat;
