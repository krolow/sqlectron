import React, {Component, PropTypes} from 'react';
import { Color } from '../styles/vars.js';

const style = {
  backgroundColor: Color.blue,
};

@Radium.Enhancer
export default class List extends Component {

  static propTypes = {}

  render() {
    return <div style={[style]}>
			<img src="images/logo.png" />
    </div>;
  }

};
