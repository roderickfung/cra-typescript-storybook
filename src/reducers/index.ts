import { combineReducers } from "redux";
import itemsReducer, { IItemsState } from "./items";
export interface IRootReducerProps {
	itemsReducer: IItemsState;
}

const reducers = combineReducers<IRootReducerProps>({
	itemsReducer,
});

export default reducers;
