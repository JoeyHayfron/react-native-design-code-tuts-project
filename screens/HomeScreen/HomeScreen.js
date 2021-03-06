// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Constants from "expo-constants";
import {
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Animated,
	StatusBar,
	Platform,
} from "react-native";
import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { NotificationIcon } from "../../components/Icons";
import Logo from "../../components/Logo";
import Course from "../../components/Course";
import Menu from "../../components/Menu";
import { connect } from "react-redux";
import { openMenu } from "../../redux/actions/ui/ui.actions";
import { gql, useQuery } from "@apollo/client";

const CardsQuery = gql`
	{
		cardCollection {
			items {
				title
				subtitle
				caption
				image {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				}
				logo {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				}
				content
			}
		}
	}
`;

function HomeScreen(props) {
	const scale = new Animated.Value(1);
	const opacity = new Animated.Value(1);
	const { loading, error, data } = useQuery(CardsQuery);

	useEffect(() => {
		StatusBar.setTranslucent(true);
		StatusBar.setBackgroundColor("transparent");
		StatusBar.setBarStyle("dark-content", true);
	}, []);

	useEffect(() => {
		showMenu();
	}, [props.menuToggled]);

	const showMenu = () => {
		if (props.menuToggled) {
			Animated.spring(scale, { toValue: 0.9 }).start();
			Animated.spring(opacity, { toValue: 0.7 }).start();
			StatusBar.setBarStyle("light-content", true);
		} else if (!props.menuToggled) {
			Animated.spring(scale, { toValue: 1 }).start();
			Animated.spring(opacity, { toValue: 1 }).start();
			StatusBar.setBarStyle("dark-content", true);
		}
	};

	return (
		<RootView>
			<Menu />
			<AnimatedContainer style={{ transform: [{ scale: scale }], opacity: opacity }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
					}}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<TitleBar>
							<TouchableOpacity onPress={() => props.toggleMenu()}>
								<Avatar
									source={
										props.user != undefined
											? { uri: props.user.photo }
											: require("../../assets/avatar-default.jpg")
									}
								/>
								<Title>Welcome back,</Title>
								<Name>{props.user != undefined ? props.user.name : `${Joseph}`}</Name>
							</TouchableOpacity>
							<NotificationIcon style={{ position: "absolute", right: 12, top: 5 }} />
						</TitleBar>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							style={{
								flexDirection: "row",
								paddingRight: 20,
								paddingLeft: 12,
								paddingTop: 30,
								paddingBottom: 5,
							}}>
							{logos.map((item, index) => (
								<Logo image={item.image} text={item.text} key={index} />
							))}
						</ScrollView>
						<SubTitle>Continue Learning</SubTitle>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							{loading ? (
								<Message>Loading....</Message>
							) : error ? (
								<Message>Error occured</Message>
							) : data.cardCollection.items ? (
								<CardsContainer>
									{data.cardCollection.items
										.map((card, index) => {
											console.log(card);
											return (
												<TouchableOpacity
													key={index}
													onPress={() => {
														props.navigation.push("Section", {
															section: card,
														});
													}}>
													<Card
														title={card.title}
														image={card.image.url}
														caption={card.caption}
														subtitle={card.subtitle}
														logo={card.logo.url}
													/>
												</TouchableOpacity>
											);
										})
										.reverse()}
								</CardsContainer>
							) : (
								""
							)}
						</ScrollView>
						<SubTitle>Popular Courses</SubTitle>
						<CoursesContainer>
							{popularCourses.map((item, index) => (
								<Course
									primaryText={item.primaryText}
									secondaryText={item.secondaryText}
									author={item.author}
									logo={item.logo}
									image={item.image}
									caption={item.caption}
									profile={item.profile}
									key={index}
								/>
							))}
						</CoursesContainer>
					</ScrollView>
				</SafeAreaView>
			</AnimatedContainer>
		</RootView>
	);
}

const mapStateToProps = (state) => {
	return {
		menuToggled: state.ui.toggleMenu,
		user: state.user.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleMenu: () => dispatch(openMenu()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
	background: black;
	flex: 1;
`;
const Container = styled.View`
	flex: 1;
	background-color: #f0f4f5;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Message = styled.Text``;
const CardsContainer = styled.View`
	flex-direction: row;
	padding-left: 10px;
`;

const CoursesContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 10px;
` ;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
	font-size: 16px;
	font-weight: 500;
	color: #b8bece;
`;

const Name = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #3c4560;
`;

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	position: absolute;
	top: 0;
	left: 0;
	margin-left: -54px;
`;

const SubTitle = styled.Text`
	color: #b8bece;
	font-size: 16px;
	text-transform: uppercase;
	margin-top: 20px;
	margin-left: 20px;
	font-weight: 600;
`;

const logos = [
	{
		image: require("../../assets/logo-framerx.png"),
		text: "Framer X",
	},
	{
		image: require("../../assets/logo-figma.png"),
		text: "Figma",
	},
	{
		image: require("../../assets/logo-studio.png"),
		text: "Studio",
	},
	{
		image: require("../../assets/logo-react.png"),
		text: "React",
	},
	{
		image: require("../../assets/logo-swift.png"),
		text: "Swift",
	},
	{
		image: require("../../assets/logo-sketch.png"),
		text: "Sketch",
	},
];

const popularCourses = [
	{
		primaryText: "Prototype in InVision Studio",
		secondaryText: "10 sections",
		logo: require("../../assets/logo-studio.png"),
		image: require("../../assets/background13.jpg"),
		author: "Meng To",
		caption: "Design and Interactive Prototype",
		profile: require("../../assets/avatar.jpg"),
	},
	{
		primaryText: "React for Designers",
		secondaryText: "12 sections",
		logo: require("../../assets/logo-react.png"),
		image: require("../../assets/background11.jpg"),
		author: "Meng To",
		caption: "Learn to Design and code a React site",
		profile: require("../../assets/avatar.jpg"),
	},
	{
		primaryText: "Design and Code in Framer X",
		secondaryText: "10 sections",
		logo: require("../../assets/logo-framerx.png"),
		image: require("../../assets/background14.jpg"),
		author: "Meng To",
		caption: "Create powerful designs and code components for your app",
		profile: require("../../assets/avatar.jpg"),
	},
	{
		primaryText: "Design Systems in Figma",
		secondaryText: "10 sections",
		logo: require("../../assets/logo-figma.png"),
		image: require("../../assets/background6.jpg"),
		author: "Meng To",
		caption: "Complete guide to designing a site using a collaborative design tool",
		profile: require("../../assets/avatar.jpg"),
	},
];
