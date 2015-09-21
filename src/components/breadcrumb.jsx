import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const STYLES = {
  wrapper: {
    marginTop: '40px',
  },
  link: {
    color: '#FFF'
  }
};

export default class Breadcrumb extends Component {

  static propTypes = {
    pages: PropTypes.array.isRequired,
  }

  render() {
    const { pages } = this.props;

    return (
      <div className="ui large breadcrumb" style={STYLES.wrapper}>
      {pages.map((page, i) => {
        return step(page, i === pages.length - 1)
      })}
      </div>
    )
  }

};

function step(page, isLast) {
  let icon = '';
  if (page.icon) {
    const iconClass = `icon ${page.icon}`;
    icon = <i className={iconClass}></i>
  }

  if (isLast) {
    return (
      <span>
        { icon }
        <div className="active section">{page.name}</div>
      </span>
    )
  }

  return (
    <Link to={page.href} style={STYLES.link}>
      { icon }
      <div className="section">{page.name}</div>
      <div className="divider"> / </div>
    </Link>
  );
}
