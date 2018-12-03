import React, { PureComponent, Fragment } from 'react';
import Driver from '../Driver'

export default class DriversList extends PureComponent {
  
  render() {
    const { drivers } = this.props;
    return (
     <Fragment>
     	  { drivers.map((driver, idx) => <Driver key={idx} driver={driver} />) }
     </Fragment>
    );
  }
}
