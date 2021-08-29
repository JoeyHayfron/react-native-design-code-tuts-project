import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenContainer from "../screens/HomeScreen/HomeScreenContainer";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const HomeStack = createStackNavigator();
const CoursesStack = createStackNavigator();
const ProjectsStack = createStackNavigator();

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }} mode='modal'>
			<HomeStack.Screen name='Home' component={HomeScreenContainer} />
		</HomeStack.Navigator>
	);
};

const CoursesStackScreens = () => {
	return (
		<CoursesStack.Navigator>
			<CoursesStack.Screen name='Courses' component={CoursesScreen} />
		</CoursesStack.Navigator>
	);
};

const ProjectsStackScreens = () => {
	return (
		<ProjectsStack.Navigator>
			<ProjectsStack.Screen
				name='Projects'
				component={ProjectsScreen}
				options={{ headerShown: false }}
			/>
		</ProjectsStack.Navigator>
	);
};
const BottomTabNavigator = createBottomTabNavigator();

const BottomTabNavigation = () => {
	return (
		<BottomTabNavigator.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name == "Home") {
						iconName = "ios-home";
					} else if (route.name == "Courses") {
						iconName = "albums-outline";
					} else if (route.name == "Projects") {
						iconName = "book-outline";
					}
					return <Ionicons name={iconName} size={25} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#4775f2",
				inactiveTintColor: "#b8bece",
			}}>
			<BottomTabNavigator.Screen name='Projects' component={ProjectsStackScreens} />
			<BottomTabNavigator.Screen name='Home' component={HomeStackScreens} />
			<BottomTabNavigator.Screen name='Courses' component={CoursesStackScreens} />
		</BottomTabNavigator.Navigator>
	);
};

const BottomStack = createStackNavigator();

const NewBottomNav = () => {
	return (
		<NavigationContainer>
			<BottomStack.Navigator>
				<BottomStack.Screen
					name='Home'
					component={BottomTabNavigation}
					options={{ headerShown: false }}
				/>
				<BottomStack.Screen
					name='Section'
					component={SectionScreen}
					options={{ headerShown: false }}
				/>
			</BottomStack.Navigator>
		</NavigationContainer>
	);
};

export default NewBottomNav;
