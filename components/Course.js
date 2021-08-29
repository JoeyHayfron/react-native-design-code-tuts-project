import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function getCardWidth(screenWidth) {
	var cardWidth = screenWidth - 40;
	if (screenWidth >= 768) {
		cardWidth = (screenWidth - 60) / 2;
	}
	if (screenWidth >= 1024) {
		cardWidth = (screenWidth - 80) / 3;
	}
	return cardWidth;
}

export default function Course(props) {
	const [cardWidth, setCardWidth] = useState(getCardWidth(screenWidth));
	useEffect(() => {
		Dimensions.addEventListener("change", adaptLayout);
	}, []);

	const adaptLayout = (dimension) => {
		setCardWidth(getCardWidth(dimension.window.width));
	};
	return (
		<Container style={{ width: cardWidth }}>
			<Cover>
				<Image source={props.image} />
				<Logo source={props.logo} />
				<CoverText>
					<SecondaryText>{props.secondaryText}</SecondaryText>
					<PrimaryText>{props.primaryText}</PrimaryText>
				</CoverText>
			</Cover>
			<Content>
				<Profile source={props.profile} />
				<ContentText>
					<Caption>{props.caption}</Caption>
					<Author>Taught By {props.author}</Author>
				</ContentText>
			</Content>
		</Container>
	);
}

const Container = styled.View`
	height: 335px;
	background: white;
	border-radius: 10px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	elevation: 3.5;
	margin: 10px 10px;
	align-self: center;
`;

const Cover = styled.View`
	height: 260px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
	flex-direction: column;
`;

const Image = styled.Image`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Logo = styled.Image`
	height: 48px;
	width: 48px;
	margin-top: 40px;
	align-self: center;
`;

const CoverText = styled.View`
	position: absolute;
	left: 20px;
	bottom: 30px;
`;

const SecondaryText = styled.Text`
	font-size: 20px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.8);
`;

const PrimaryText = styled.Text`
	width: 170px;
	font-size: 28px;
	color: white;
	font-weight: bold;
`;

const Content = styled.View`
	height: 75px;
	width: 335px;
	flex-direction: row;
	align-items: center;
`;

const Profile = styled.Image`
	height: 38px;
	width: 38px;
	border-radius: 19px;
	margin-left: 12px;
`;

const ContentText = styled.View`
	flex-direction: column;
	margin-left: 12px;
	padding-right: 5px;
	flex: 1;
	min-width: 268px;
`;

const Caption = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #3c4560;
	margin-right: 10px;
`;

const Author = styled.Text`
	margin-top: 4px;
	color: #b8bece;
	font-weight: 500;
	font-size: 15px;
`;
