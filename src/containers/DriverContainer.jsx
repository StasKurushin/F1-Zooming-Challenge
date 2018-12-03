import React, { PureComponent, Fragment} from 'react';

import Loading from '../components/Loading';
import DriverPage from '../components/DriverPage'

export default class DriverContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            driver: {},
            loading: false
        }
    }
    
    componentDidMount() {
        const { match } = this.props;
        this.setState({ loading: true });
        fetch(`http://ergast.com/api/f1/drivers/${match.params.driverId}.json`)
        .then((response) => response.json())
        .then((data) => {
            let driver = data.MRData.DriverTable.Drivers[0];
            this.setState({
                driver,
                loading: false
            });
            
        })
       .catch(() => {
            this.setState({
                driver: {},
                loading: false
            });
        });
    }
    
    render() {
        const { driver, loading } = this.state;
        return (
            <Fragment>
            { loading ? <Loading /> : <DriverPage {...driver} /> } 
            </Fragment>
        );
    }
}
         