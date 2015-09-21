import React, {Component, PropTypes} from 'react';
import Breadcrumb from './breadcrumb.jsx';

const STYLES = {
  wrapper: {
    height: '110px',
    backgroundColor: '#3399DB',
    borderBottom: '2px solid #217BB8',
  },
  logo: {
    marginLeft: '30px',
    marginTop: '4px',
  }
};

export default class Head extends Component {
  static propTypes = {
    pages: React.PropTypes.array,
  };

  render() {
    const { pages, right } = this.props;

    let breadcrumb;
    if (pages) {
      breadcrumb = (<Breadcrumb pages={pages} />)
    }

    return (
      <div className="ui grid" style={STYLES.wrapper}>
        <div className="eight wide column">
          <img style={STYLES.logo} src="images/logo.png" />
        </div>
        <div className="eight wide column">
          {breadcrumb}
        </div>
      </div>
    );
  }

};
