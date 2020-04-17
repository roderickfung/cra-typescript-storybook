import { Dispatch } from "redux";

// export type UserActionKey =
export enum ActionKeys {
	GET_USERS = "USERS/GET_USERS",
}

export const getUsers = () => {
	return async (dispatch: Dispatch<any>): Promise<any> => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const users = await response.json();
			dispatch({
				type: ActionKeys.GET_USERS,
				payload: users,
			});
		} finally {
		}
	};
};
