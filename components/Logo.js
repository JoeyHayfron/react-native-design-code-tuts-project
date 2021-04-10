import React from "react";
import styled from "styled-components";

export default function Logo(props) {
	return (
		<Container>
			<Image source={props.image} resizeMode='contain' />
			<Text>{props.text}</Text>
		</Container>
	);
}

const Container = styled.View`
	background: white;
	border-radius: 10px;
	elevation: 2;
	padding: 12px 16px 12px;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	flex-direction: row;
	height: 60px;
	margin: 0 8px;
	margin-bottom: 20px;
`;

const Image = styled.Image`
	height: 36px;
	width: 36px;
`;

const Text = styled.Text`
	font-size: 17px;
	font-weight: 700;
	margin-left: 8px;
`;
