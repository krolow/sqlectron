import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';

class Connection extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('contact', {})); // clear form
  }

  render() {
    return (
      <div>
        <Header />        
        <h1>Connection Information</h1>

        <ContactForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default connect()(Connection);
