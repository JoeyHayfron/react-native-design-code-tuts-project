import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Project(props) {
	const screenHeight = Dimensions.get("window").height;
	const screenWidth = Dimensions.get("window").width;

	const [cardHeight, setCardHeight] = useState(new Animated.Value(460));
	const [cardWidth, setCardWidth] = useState(new Animated.Value(315));
	const [titleTop, setTitleTop] = useState(new Animated.Value(20));
	const [closeButtonOpacity, setCloseButtonOpacity] = useState(new Animated.Value(0));

	const openCard = () => {
		console.log("HHH", screenHeight);
		Animated.spring(cardHeight, { toValue: screenHeight }).start();
		Animated.spring(cardWidth, { toValue: screenWidth }).start();
	};

	return (
		<TouchableWithoutFeedback onPress={openCard}>
			<AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
				<Cover>
					<Image source={props.image} />
					<AnimatedTitle>{props.title}</AnimatedTitle>
					<Author>by {props.author}</Author>
				</Cover>
				<Text>{props.text}</Text>
			</AnimatedContainer>
		</TouchableWithoutFeedback>
	);
}

const Container = styled.View`
	width: 315px;
	height: 460px;
	border-radius: 14px;
	background: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	elevation: 10;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 290px;
	border-top-right-radius: 14px;
	border-top-left-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	position: absolute;
	font-size: 28px;
	font-weight: bold;
	color: white;
	top: 20px;
	left: 20px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
	position: absolute;
	font-size: 24px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.8);
	bottom: 20px;
	left: 20px;
`;

const Text = styled.Text`
	margin: 20px;
	line-height: 24px;
	font-size: 17px;
	text-align: justify;
`;
