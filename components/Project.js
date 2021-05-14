import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	Animated,
	Dimensions,
	TouchableWithoutFeedback,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { openCard, closeCard } from "../redux/actions/ui/ui.actions";

const Project = (props) => {
	const screenHeight = Dimensions.get("window").height;
	const screenWidth = Dimensions.get("window").width;

	const [cardHeight, setCardHeight] = useState(new Animated.Value(460));
	const [cardWidth, setCardWidth] = useState(new Animated.Value(315));
	const [titleTop, setTitleTop] = useState(new Animated.Value(20));
	const [closeButtonOpacity, setCloseButtonOpacity] = useState(new Animated.Value(0));
	const [textHeight, setTextHeight] = useState(new Animated.Value(100));

	const openCard = () => {
		if (!props.canOpen) return;

		Animated.spring(cardHeight, { toValue: screenHeight }).start();
		Animated.spring(cardWidth, { toValue: screenWidth }).start();
		Animated.spring(titleTop, { toValue: 40 }).start();
		Animated.spring(closeButtonOpacity, { toValue: 1 }).start();
		Animated.spring(textHeight, { toValue: 1000 }).start();

		StatusBar.setHidden(true);
		props.openCard();
	};

	const closeCard = () => {
		Animated.spring(cardHeight, { toValue: 460 }).start();
		Animated.spring(cardWidth, { toValue: 315 }).start();
		Animated.spring(titleTop, { toValue: 20 }).start();
		Animated.spring(closeButtonOpacity, { toValue: 0 }).start();
		Animated.spring(textHeight, { toValue: 100 }).start();

		StatusBar.setHidden(false);
		props.closeCard();
	};

	return (
		<TouchableWithoutFeedback onPress={openCard}>
			<AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
				<Cover>
					<Image source={props.image} />
					<AnimatedTitle style={{ top: titleTop }}>{props.title}</AnimatedTitle>
					<Author>by {props.author}</Author>
				</Cover>
				<AnimatedText style={{ height: textHeight }}>{props.text}</AnimatedText>
				<AnimatedLinearGradient
					colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
					style={{
						position: "absolute",
						top: 330,
						width: "100%",
						height: textHeight,
					}}
				/>
				<TouchableOpacity
					style={{ position: "absolute", top: 40, right: 20 }}
					onPress={() => {
						closeCard();
					}}>
					<AnimatedCloseView style={{ opacity: closeButtonOpacity }}>
						<Ionicons name='ios-close' size={32} color='#546bfb' />
					</AnimatedCloseView>
				</TouchableOpacity>
			</AnimatedContainer>
		</TouchableWithoutFeedback>
	);
};

const mapStateToProps = (state) => {
	return {
		cardOpened: state.ui.cardOpened,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openCard: () => dispatch(openCard()),
		closeCard: () => dispatch(closeCard()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

const Container = styled.View`
	width: 315px;
	height: 460px;
	border-radius: 14px;
	background: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	elevation: 10;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Cover = styled.View`
	height: 290px;
	border-top-right-radius: 14px;
	border-top-left-radius: 14px;
	overflow: hidden;
`;

const CloseView = styled.View`
	height: 32px;
	width: 32px;
	border-radius: 16px;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

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

const AnimatedText = Animated.createAnimatedComponent(Text);
