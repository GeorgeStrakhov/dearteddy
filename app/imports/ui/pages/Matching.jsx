import React, { Component } from 'react';

class Matching extends Component {

  role() {
    let role = (this.props.params.role == 'human') ? 'bear' : 'human';
    return role;
  }
  
  render() {
    return (
        <div className="page matching-page">
        <h3>Sit tight, your {this.role()}  is on the way...</h3>
        </div>
    )
  }

}

export default Matching;
