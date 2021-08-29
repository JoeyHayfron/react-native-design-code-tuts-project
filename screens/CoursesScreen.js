import React from "react";
import styled from "styled-components";

const CoursesScreen = (props) => {
	return (
		<Container>
			<Text>Welcome to React Native</Text>
		</Container>
	);
};

export default CoursesScreen;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const Text = styled.Text`
	color: black;
`;
