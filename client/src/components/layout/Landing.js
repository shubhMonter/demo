import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Friends Connector</h1>
                <p className="lead">
                  {' '}
                  Create Friend List and track your friend.
                </p>
                <hr />
                <Link to="/addfriend" className="btn btn-lg btn-info mr-2">
                  Add Friend
                </Link>
                <Link to="/friendlist" className="btn btn-lg btn-light">
                  Friend List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
