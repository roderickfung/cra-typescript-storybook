import { ActionKeys } from "actions/posts";
import { IPost } from "interfaces/posts";
export interface IPostsState {
	posts: IPost[];
}

const init: IPostsState = {
	posts: [],
};

const postsReducer = (state: IPostsState = init, action: any): IPostsState => {
	switch (action.type) {
		case ActionKeys.GET_POSTS:
			return { ...state, posts: action.payload };
		default:
			return state;
	}
};

export default postsReducer;
