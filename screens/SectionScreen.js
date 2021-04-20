import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const SectionScreen = (props) => {
	return (
		<Container>
			<Text>Welcome to React Native</Text>
			<Button title='Go Back' onPress={() => props.navigation.goBack()}>
				GO BACK
			</Button>
		</Container>
	);
};

export default SectionScreen;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const Text = styled.Text`
	color: black;
`;
