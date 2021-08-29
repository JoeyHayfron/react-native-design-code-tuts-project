import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function MenuItem(props) {
	return (
		<Container>
			<IconView>
				<Ionicons name={props.icon} size={32} color='#546bfb' />
			</IconView>
			<Content>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
			</Content>
		</Container>
	);
}

const Container = styled.View`
	flex-direction: row;
	margin-top: 15px;
	margin-bottom: 15px;
`;

const IconView = styled.View`
	height: 32px;
	width: 32px;
`;

const Content = styled.View`
	padding-left: 40px;
`;

const Title = styled.Text`
	color: #3c4560;
	font-size: 26px;
	font-weight: 700;
`;

const Text = styled.Text`
	color: #3c4560;
	opacity: 0.6;
	margin-top: 5px;
`;
