import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenContainer from "../screens/HomeScreen/HomeScreenContainer";
import SectionScreen from "../screens/SectionScreen";

const Stack = createStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreenContainer}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Section'
					component={SectionScreen}
					oprions={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
