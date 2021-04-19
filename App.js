import React from "react";
import styled from "styled-components";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
	return (
		<Provider store={store}>
			<Container>
				<HomeScreen />
			</Container>
		</Provider>
	);
}

const Container = styled.View`
	flex: 1;
`;
