import React from "react";
import styled from "styled-components";
import AppNavigator from "./navigator/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BottomTabNavigation from "./navigator/TabNavigator";

export default function App() {
	return (
		<Provider store={store}>
			<Container>
				<BottomTabNavigation />
			</Container>
		</Provider>
	);
}

const Container = styled.View`
	flex: 1;
`;
