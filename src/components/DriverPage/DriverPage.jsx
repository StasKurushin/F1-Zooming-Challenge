import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class DriverPage extends PureComponent {
  static propTypes = {
    givenName: PropTypes.string,
    familyName: PropTypes.string,
    nationality: PropTypes.string,
    dateOfBirth: PropTypes.string,
    url: PropTypes.string,
  };

  renderProps = () => {
    const { givenName, familyName, nationality, dateOfBirth, url } = this.props;
    return [givenName, familyName, nationality, dateOfBirth, url]
              .map((item, idx) => <li key={idx}>{item}</li>)
  }

  render() {
    const { givenName, familyName, nationality, dateOfBirth, url } = this.props;
    return (
      <Fragment>
        <p>Name:{' ' + givenName}</p>
        <p>Family Name:{' ' + familyName}</p>
        <p>Nationality:{' ' + nationality}</p>
        <p>Date of Birthday:{' ' + dateOfBirth}</p>
        <p>Info:<a href={url}>{url}</a></p>
      </Fragment>
    );
  }
}

