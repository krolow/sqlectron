import React, { Component, PropTypes } from 'react';
import ValidatedComponent from 'utils/validated-component.jsx'
import {connectReduxForm} from 'redux-form';

const style = {
  left: {
    minWidth: 56,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
  },
};

@Radium.Enhancer
@connectReduxForm({
  form: 'connection',
  fields: ['client', 'name', 'port', 'host', 'user', 'password', 'sshHost', 'sshPort', 'sshUser', 'sshPassword', 'sshPrivateKey'],
  validate: function () { return {} }
})
export default class ConnectionForm extends ValidatedComponent {

  render() {
    const {
      fields: {
        client,
        name,
        port,
        host,
        user,
        password,
        sshHost,
        sshPort,
        sshUser,
        sshPassword,
        sshPrivateKey,
        handleSubmit,
      }
    } = this.props;

    return (
      <form onSubmit={handleSubmit} style={[style.left]}>
        <fieldset>
          <legend>Database</legend>
          <div>
            <label>Database</label>
            <select>
              <option name="pgsql">Postgresql</option>
              <option name="mysql">MySQL</option>
            </select>
            <label>Connection Name</label>
            <input type="client" {...name}/>
            { name.error && name.touched ? <div>{name.error}</div> : '' }
          </div>
          <div>
            <label>Port</label>
            <input type="number" {...port}/>
            { port.error && port.touched ? <div>{port.error}</div> : '' }
          </div>
          <div>
            <label>Host</label>
            <input type="text" {...host}/>
            { host.error && host.touched ? <div>{host.error}</div> : ''}
          </div>
          <div>
            <label>User</label>
            <input type="text" {...user}/>
            { user.error && user.touched ? <div>{user.error}</div> : ''}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...user}/>
            { password.error && password.touched ? <div>{password.error}</div> : ''}
          </div>
        </fieldset>
        <fieldset>
          <legend>SSh Tunnel</legend>
          <label>Host</label>
          <input type="text" {...sshHost} />
          <label>Port</label>
          <input type="number" {...sshPort} />
          <label>User</label>
          <input type="text" {...sshUser} />
          <label>Password</label>
          <input type="password" {...sshPassword} />
          <label>Private Key</label>
          <input type="file" {...sshPrivateKey} />
        </fieldset>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}
