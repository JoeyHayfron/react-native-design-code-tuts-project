export const UIReducer = (state = { toggleMenu: false }, action) => {
	switch (action.type) {
		case "OPEN_MENU":
			return { ...state, toggleMenu: true };
		case "CLOSE_MENU":
			return { ...state, toggleMenu: false };
		default:
			return state;
	}
};
