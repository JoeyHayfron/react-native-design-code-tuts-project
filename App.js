import React from "react";
import styled from "styled-components";
import AppNavigator from "./navigator/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BottomTabNavigation from "./navigator/TabNavigator";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
	uri: "https://graphql.contentful.com/content/v1/spaces/v3iginodoibn",
	credentials: "same-origin",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer IppBxhvvl-REaOSNEjTB76bJBQJQ80ou4wkrmqtb7HM`,
	},
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Container>
					<BottomTabNavigation />
				</Container>
			</Provider>
		</ApolloProvider>
	);
}

const Container = styled.View`
	flex: 1;
`;
