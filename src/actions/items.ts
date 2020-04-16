import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootReducerProps } from "reducers/index";
import { IItem } from "interfaces/items";

export enum ActionKeys {
	ADD_ITEM = "ITEMS/ADD_ITEM",
	REMOVE_ITEM = "ITEMS/REMOVE_ITEM",
	CHECK_ITEM = "ITEMS/CHECK_ITEM",
	UNCHECK_ITEM = "ITEMS/UNCHECK_ITEM",
}

export interface IItemActionAdd {
	type: ActionKeys.ADD_ITEM;
	payload: IItem;
}

export type IItemActions = IItemActionAdd;

export type ThunkResult<R> = ThunkAction<
	R,
	IRootReducerProps,
	undefined,
	IItemActions
>;

export const addItem = (label: string): ThunkResult<any> => {
	return (dispatch: Dispatch<any>) => {
		const item: IItem = {
			check: false,
			label,
			date: new Date(),
		};

		dispatch({
			type: ActionKeys.ADD_ITEM,
			payload: item,
		});
	};
};
