const initialState = {
	toggleMenu: false,
	cardOpened: false,
};

export const UIReducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN_MENU":
			return { ...state, toggleMenu: true };
		case "CLOSE_MENU":
			return { ...state, toggleMenu: false };
		case "OPEN_CARD":
			return { ...state, cardOpened: true };
		case "CLOSE_CARD":
			return { ...state, cardOpened: false };
		default:
			return state;
	}
};
