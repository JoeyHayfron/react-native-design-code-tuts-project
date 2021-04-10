import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { ScrollView, SafeAreaView } from "react-native";
import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";

export default function App() {
	return (
		<Container>
			<SafeAreaView
				style={{
					paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
				}}>
				<ScrollView>
					<TitleBar>
						<Avatar source={require("./assets/avatar.jpg")} />
						<Title>Welcome back,</Title>
						<Name>Joseph</Name>
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
						{continueLearning.map((item, index) => (
							<Card
								title={item.title}
								image={item.image}
								caption={item.caption}
								subtitle={item.subtitle}
								logo={item.logo}
								key={index}
							/>
						))}
					</ScrollView>
					<SubTitle>Popular Courses</SubTitle>
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
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f4f5;
`;

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
	margin-left: 12px;
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
		image: require("./assets/logo-framerx.png"),
		text: "Framer X",
	},
	{
		image: require("./assets/logo-figma.png"),
		text: "Figma",
	},
	{
		image: require("./assets/logo-studio.png"),
		text: "Studio",
	},
	{
		image: require("./assets/logo-react.png"),
		text: "React",
	},
	{
		image: require("./assets/logo-swift.png"),
		text: "Swift",
	},
	{
		image: require("./assets/logo-sketch.png"),
		text: "Sketch",
	},
];

const continueLearning = [
	{
		title: "React Native for Designers",
		image: require("./assets/background11.jpg"),
		caption: "React Native",
		subtitle: "1 of 12 sections",
		logo: require("./assets/logo-react.png"),
	},
	{
		title: "Styled COmponents",
		image: require("./assets/background12.jpg"),
		caption: "React Native",
		subtitle: "2 of 12 sections",
		logo: require("./assets/logo-react.png"),
	},
	{
		title: "Props and Icons",
		image: require("./assets/background13.jpg"),
		caption: "React Native",
		subtitle: "3 of 12 sections",
		logo: require("./assets/logo-react.png"),
	},
	{
		title: "Static Data and Loop",
		image: require("./assets/background14.jpg"),
		caption: "React Native",
		subtitle: "1 of 12 sections",
		logo: require("./assets/logo-react.png"),
	},
];

const popularCourses = [
	{
		primaryText: "Prototype in InVision Studio",
		secondaryText: "10 sections",
		logo: require("./assets/logo-studio.png"),
		image: require("./assets/background13.jpg"),
		author: "Meng To",
		caption: "Design and Interactive Prototype",
		profile: require("./assets/avatar.jpg"),
	},
	{
		primaryText: "React for Designers",
		secondaryText: "12 sections",
		logo: require("./assets/logo-react.png"),
		image: require("./assets/background11.jpg"),
		author: "Meng To",
		caption: "Learn to Design and code a React site",
		profile: require("./assets/avatar.jpg"),
	},
	{
		primaryText: "Design and Code in Framer X",
		secondaryText: "10 sections",
		logo: require("./assets/logo-framerx.png"),
		image: require("./assets/background14.jpg"),
		author: "Meng To",
		caption: "Create powerful designs and code components for your app",
		profile: require("./assets/avatar.jpg"),
	},
	{
		primaryText: "Design Systems in Figma",
		secondaryText: "10 sections",
		logo: require("./assets/logo-figma.png"),
		image: require("./assets/background6.jpg"),
		author: "Meng To",
		caption: "Complete guide to designing a site using a collaborative design tool",
		profile: require("./assets/avatar.jpg"),
	},
];
