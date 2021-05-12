import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { closeMenu } from "../redux/actions/ui/ui.actions";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth;
if (screenWidth > 500) {
	cardWidth = 500;
}
const screenHeight = Dimensions.get("window").height;

function Menu(props) {
	const top = new Animated.Value(screenHeight);

	useEffect(() => {
		if (props.menuToggled) {
			Animated.spring(top, {
				toValue: 54,
			}).start();
		} else if (!props.menuToggled) {
			Animated.spring(top, {
				toValue: screenHeight,
			}).start();
		}
	}, [props.menuToggled]);

	return (
		<AnimatedContainer style={{ top: top }}>
			<Cover>
				<Image source={require("../assets/background2.jpg")} />
				<Title>Joseph Acquah</Title>
				<SubTitle>joeacq81@gmail.com</SubTitle>
			</Cover>
			<TouchableOpacity
				onPress={() => props.toggleMenu()}
				style={{
					position: "absolute",
					top: 120,
					left: "50%",
					marginLeft: -22,
					zIndex: 1,
				}}>
				<CloseView>
					<Ionicons name='ios-close' size={44} color='#546bfb' />
				</CloseView>
			</TouchableOpacity>
			<Content>
				{items.map((item, index) => {
					return (
						<MenuItem key={index} icon={item.icon} title={item.title} text={item.text} />
					);
				})}
			</Content>
		</AnimatedContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		menuToggled: state.ui.toggleMenu,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleMenu: () => dispatch(closeMenu()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
	position: absolute;
	height: 100%;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Title = styled.Text`
	color: white;
	font-size: 28px;
	font-weight: bold;
`;

const SubTitle = styled.Text`
	color: rgba(255, 255, 255, 0.7);
	font-size: 13px;
	margin-top: 8px;
`;

const CloseView = styled.View`
	height: 44px;
	width: 44px;
	border-radius: 22px;
	background: white;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	elevation: 3.5;
`;

const Container = styled.View`
	height: 100%;
	width: ${cardWidth};
	align-self: center;
	position: absolute;
	background: white;
	z-index: 100;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background-color: black;
	align-items: center;
	justify-content: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Content = styled.View`
	height: ${screenHeight};
	background: #f0f3f5;
	padding: 50px;
`;

const items = [
	{
		icon: "ios-settings",
		title: "Account",
		text: "settings",
	},
	{
		icon: "ios-card",
		title: "Billing",
		text: "payment",
	},
	{
		icon: "ios-compass",
		title: "Learn React",
		text: "start course",
	},
	{
		icon: "ios-exit",
		title: "Logout",
		text: "see you soon!",
	},
];
