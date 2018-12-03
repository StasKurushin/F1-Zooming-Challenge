import React, { PureComponent, Fragment } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Driver extends PureComponent {
  static propTypes = {
    driver: PropTypes.shape({
      givenName: PropTypes.string.isRequired,
      familyName: PropTypes.string,
      driverId: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { driver } = this.props;
    return (
      <Fragment>
        <Link to={`/${driver.driverId}`}>
          <li>
          	{driver.givenName + ' ' + driver.familyName}
          </li> 
        </Link>
      </Fragment>
    );
  }
}

