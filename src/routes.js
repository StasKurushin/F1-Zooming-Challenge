import DriversList from 'containers/DriversListContainer';
import Driver from 'containers/DriverContainer';

export default [
  {
    path: '/',
    component: DriversList,
    exact: true
  },
  {
    path: '/:driverId',
    component: Driver,
    exact: true
  },
]