import { combineReducers } from "redux";
import { UIReducer } from "../reducers/ui/ui.reducer";
import { userReducer } from "../reducers/user/user.reducer";

export const rootReducer = combineReducers({
	ui: UIReducer,
	user: userReducer,
});
