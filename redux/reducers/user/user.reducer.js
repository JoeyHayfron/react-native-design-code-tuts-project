export const userReducer = (state = { userInfo: {} }, action) => {
	switch (action.type) {
		case "UPDATE_USER":
			return { ...state, userInfo: action.payload };
		default:
			return state;
	}
};
