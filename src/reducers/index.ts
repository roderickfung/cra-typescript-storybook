import { combineReducers } from "redux";
import itemsReducer, { IItemsState } from "./items";
import usersReducer, { IUserState } from "./users";
import postsReducer, { IPostsState } from "./posts";

export interface IRootReducerProps {
	itemsReducer: IItemsState;
	usersReducer: IUserState;
	postsReducer: IPostsState;
}

const reducers = combineReducers<IRootReducerProps>({
	itemsReducer,
	usersReducer,
	postsReducer,
});

export default reducers;
