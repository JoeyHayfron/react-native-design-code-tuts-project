import { combineReducers } from "redux";
import { UIReducer } from "../reducers/ui/ui.reducer";

export const rootReducer = combineReducers({
	ui: UIReducer,
});
