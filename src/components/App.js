import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import 'less/common.less';

class App extends Component {

  componentDidMount() {
    const { pathname } = this.props.location;
    if(pathname === '/'){
      browserHistory.push('/home');
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="cp-app">
        {children}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({
  }, dispatch)
)(App);
