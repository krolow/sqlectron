import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConnectionActions from '../actions/connections.js';
import ConnectionList from '../components/connection-list.jsx';
import Head from '../components/head.jsx';

export default class ConnectionListContainer extends Component {
  static propTypes = {
    connections: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }),
    params: PropTypes.shape({
      userLogin: PropTypes.string,
      repoName: PropTypes.string
    }).isRequired,
    children: PropTypes.node
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { connections, dispatch } = this.props;
    const actions = bindActionCreators(ConnectionActions, dispatch);

    return (
      <div>
        <Head />
        <div className="main ui container">
          <h4 className="ui header">List of Connections</h4>
          <ConnectionList connections={connections} actions={actions} />
        </div>
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    connections: state.connections
  };
}

export default connect(mapStateToProps)(ConnectionListContainer);
