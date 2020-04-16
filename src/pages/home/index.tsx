import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { addItem } from 'actions/items';
import { IItem } from 'interfaces/items';
import { IRootReducerProps } from 'reducers';
import Home from './home';

export interface IStateFromProps extends RouteComponentProps {
  items: IItem[];
  addItem: (label: string) => void;
}

const mapStateToProps = (state: IRootReducerProps, navProps: RouteComponentProps) => ({
  items: state.itemsReducer.items,
  ...navProps
});

export default connect(mapStateToProps, { addItem })(Home);
