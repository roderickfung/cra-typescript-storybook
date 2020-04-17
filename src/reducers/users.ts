import { ActionKeys } from "actions/users";
import { IUser } from "interfaces/users";
export interface IUserState {
	users: any[];
}

const init = {
	users: [],
};

const userReducer = (state: IUserState = init, action: any): IUserState => {
	switch (action.type) {
		case ActionKeys.GET_USERS:
			const formatted: IUser[] = action.payload.map((user: any) => {
				return {
					id: user.id,
					name: user.name,
				} as IUser;
			});
			return { ...state, users: formatted };
		default:
			return state;
	}
};

export default userReducer;
