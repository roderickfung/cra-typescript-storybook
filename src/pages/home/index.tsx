import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { IUser } from 'interfaces/users';
import { IPost } from 'interfaces/posts';
import { getUsers } from 'actions/users';
import { getPosts } from "actions/posts";
import { IRootReducerProps } from 'reducers';
import Home from './home';

export interface IStateFromProps extends RouteComponentProps {
  users: IUser[];
  posts: IPost[];
  getUsers: () => void;
  getPosts: () => void;
}

const mapStateToProps = (state: IRootReducerProps, navProps: RouteComponentProps) => ({
  users: state.usersReducer.users,
  posts: state.postsReducer.posts,
  ...navProps
});

export default connect(mapStateToProps, { getUsers, getPosts })(Home);
