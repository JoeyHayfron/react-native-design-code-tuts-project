import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { PanResponder, Animated } from "react-native";

const ProjectsScreen = (props) => {
	const [scale, setScale] = useState(new Animated.Value(0.9));
	const [translateY, setTranslateY] = useState(new Animated.Value(44));
	const [thirdScale, setThirdScale] = useState(new Animated.Value(0.8));
	const [thirdTranslate, setThirdTranslate] = useState(new Animated.Value(-50));
	const [index, setIndex] = useState(0);
	const pan = useRef(new Animated.ValueXY()).current;

	const getNextIndex = (index) => {
		var nextIndex = index + 1;
		if (nextIndex > projects.length - 1) return 0;

		return nextIndex;
	};

	const panResponder = useRef(
		PanResponder.create({
			onPanResponderGrant: () => {
				Animated.spring(scale, { toValue: 1 }).start();
				Animated.spring(translateY, { toValue: 0 }).start();

				Animated.spring(thirdScale, { toValue: 0.9 }).start();
				Animated.spring(thirdTranslate, { toValue: 44 }).start();
			},
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
			onPanResponderRelease: () => {
				const positionY = pan.y._value;
				if (positionY > 200) {
					Animated.timing(pan, { toValue: { x: 0, y: 1000 } }).start(() => {
						pan.setValue({ x: 0, y: 0 });
						scale.setValue(0.9);
						translateY.setValue(44);
						thirdScale.setValue(0.8);
						thirdTranslate.setValue(-50);
						setIndex((index) => getNextIndex(index));
					});
				} else {
					Animated.spring(pan, {
						toValue: { x: 0, y: 0 },
					}).start();

					Animated.spring(scale, { toValue: 0.9 }).start();
					Animated.spring(translateY, { toValue: 44 }).start();

					Animated.spring(thirdScale, { toValue: 0.8 }).start();
					Animated.spring(thirdTranslate, { toValue: -50 }).start();
				}
			},
		})
	).current;

	return (
		<Container>
			<Animated.View
				style={{
					transform: [{ translateX: pan.x }, { translateY: pan.y }],
				}}
				{...panResponder.panHandlers}>
				<Project
					title={projects[index].title}
					author={projects[index].author}
					image={projects[index].image}
					text={projects[index].text}
				/>
			</Animated.View>
			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
					height: "100%",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					transform: [{ scale }, { translateY }],
				}}>
				<Project
					title={projects[getNextIndex(index)].title}
					author={projects[getNextIndex(index)].author}
					image={projects[getNextIndex(index)].image}
					text={projects[getNextIndex(index)].text}
				/>
			</Animated.View>
			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -3,
					height: "100%",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					transform: [{ scale: thirdScale }, { translateY: thirdTranslate }],
				}}>
				<Project
					title={projects[getNextIndex(index + 1)].title}
					author={projects[getNextIndex(index + 1)].author}
					image={projects[getNextIndex(index + 1)].image}
					text={projects[getNextIndex(index + 1)].text}
				/>
			</Animated.View>
		</Container>
	);
};

export default ProjectsScreen;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const Text = styled.Text`
	color: black;
`;

const projects = [
	{
		title: "Price Tag",
		image: require("../assets/background5.jpg"),
		author: "Joeyy",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lacus, accumsan eu leo non, ultricies feugiat nisi. Duis feugiat est metus, consectetur malesuada eros iaculis sed. Maecenas convallis purus id nisl volutpat pulvinar.",
	},
	{
		title: "Nikiljay",
		image: require("../assets/background7.jpg"),
		author: "Hayfron",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lacus, accumsan eu leo non, ultricies feugiat nisi. Duis feugiat est metus, consectetur malesuada eros iaculis sed. Maecenas convallis purus id nisl volutpat pulvinar.",
	},
	{
		title: "The DM App - Ananoumous Chat",
		image: require("../assets/background6.jpg"),
		author: "Jay",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lacus, accumsan eu leo non, ultricies feugiat nisi. Duis feugiat est metus, consectetur malesuada eros iaculis sed. Maecenas convallis purus id nisl volutpat pulvinar.",
	},
];
