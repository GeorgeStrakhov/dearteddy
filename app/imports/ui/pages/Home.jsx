import React from 'react';
import { Link } from 'react-router';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

class Home extends React.Component {

  doHuman(e) {
    e.preventDefault();
    Session.set('user-role', 'human');
    browserHistory.push('/matching');
  }

  doBear(e) {
    e.preventDefault();
    Session.set('user-role', 'bear');
    browserHistory.push('/matching');
  }

  render() {
    return(
        <div className="page home-page">
          <Link to="/matching" onClick={this.doHuman.bind(this)} className="btn btn-default">I need a teddy bear</Link>
          <hr />
          <Link to="/matching" onClick={this.doBear.bind(this)} className="btn btn-default">I want to be somebody's teddy bear</Link>
          <hr />
          <p>
            <Link to="/about">
              learn more
            </Link>
          </p>
        </div>
      );
  }
}

export default Home;
