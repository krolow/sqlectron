import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConnectionActions from '../actions/connections.js';
import Body from '../widgets/body.jsx';
import Header from '../widgets/header.jsx';
import ValidatedComponent from 'utils/validated-component.jsx'
import ConnectionList from '../pages/connection-list.jsx';


export default class ConnectionListContainer extends ValidatedComponent {
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
        <Body>
          <Header />
          List of Connections
          <ConnectionList connections={connections} actions={actions} />
        </Body>
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
