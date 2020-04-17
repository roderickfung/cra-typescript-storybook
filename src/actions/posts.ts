import { Dispatch } from "redux";

export enum ActionKeys {
	GET_POSTS = "POSTS/GET_POSTS",
}

export const getPosts = () => {
	return async (dispatch: Dispatch<any>): Promise<any> => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const posts = await response.json();
			dispatch({
				type: ActionKeys.GET_POSTS,
				payload: posts,
			});
		} finally {
		}
	};
};
