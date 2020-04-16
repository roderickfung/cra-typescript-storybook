import { connect } from 'react-redux';
import Home from './home';
import { IRootReducerProps } from 'reducers';
import { RouteComponentProps } from '@reach/router';

export interface IStateFromProps extends RouteComponentProps {
  state: IRootReducerProps;
}

const mapStateToProps = (state: IRootReducerProps, navProps: RouteComponentProps) => ({
  state,
  ...navProps
});

export default connect(mapStateToProps, {})(Home);
