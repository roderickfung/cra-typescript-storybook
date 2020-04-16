import { IItemActions, ActionKeys } from "actions/items";
import { IItem } from "interfaces/items";
export interface IItemsState {
	items: IItem[];
}

const init: IItemsState = {
	items: [],
};

const itemReducer = (
	state: IItemsState = init,
	action: IItemActions
): IItemsState => {
	switch (action.type) {
		case ActionKeys.ADD_ITEM:
			return { ...state, items: [...state.items, action.payload] };
		default:
			return state;
	}
};

export default itemReducer;
