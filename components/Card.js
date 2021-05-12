import React from "react";
import styled from "styled-components";

export default function Card(props) {
	return (
		<Container>
			<Cover>
				<Image source={{ uri: props.image }} />
				<Title>{props.title}</Title>
			</Cover>
			<Content>
				<Logo source={{ uri: props.logo }} />
				<Wrapper>
					<Caption>{props.subtitle}</Caption>
					<SubTitle>{props.caption}</SubTitle>
				</Wrapper>
			</Content>
		</Container>
	);
}

const Content = styled.View`
	flex-direction: row;
	padding-left: 20px;
	align-items: center;
	height: 80px;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

const Wrapper = styled.View`
	margin-left: 12px;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 700;
`;

const SubTitle = styled.Text`
	color: #b8bece;
	font-size: 15px;
	text-transform: uppercase;
	font-weight: 600;
`;

const Container = styled.View`
	background: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	box-shadow: 0 10px 5px rgba(0, 0, 0, 0.15);
	elevation: 3.5;
	margin: 20px 10px;
`;
const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;
const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;
const Title = styled.Text`
	width: 170px;
	color: white;
	margin-top: 12px;
	margin-left: 12px;
	font-size: 24px;
	font-weight: bold;
`;
