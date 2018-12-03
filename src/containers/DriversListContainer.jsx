import React, { Fragment, PureComponent } from 'react';

import Loading from '../components/Loading';
import DriversList from '../components/DriversList'

export default class DriversListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            drivers: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('http://ergast.com/api/f1/drivers.json')
            .then(res => res.json())
            .then((data) => {
                let drivers = data.MRData.DriverTable.Drivers;
                this.setState({
                    drivers,
                    loading: false
                });
            })
            .catch(() => {
                this.setState({
                    drivers: [],
                    loading: false
                });
            });
    }

    render() {
        const { drivers, loading } = this.state;
        return (
            <Fragment>
                { loading ? <Loading /> : <DriversList drivers={drivers} /> }
            </Fragment>
        )
    }
}