import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeScreen from "./HomeScreen";
import { connect } from "react-redux";
import { setUserDetails } from "../../redux/actions/user/user.actions";

const HomeScreenContainer = (props) => {
	useEffect(() => {
		fetch("https://uifaces.co/api", {
			headers: new Headers({
				"X-API-KEY": "A929B7CF-01B44378-ADD5D531-7F12F2A1",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				props.setUserDetails(response[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			<HomeScreen navigation={props.navigation} />
		</Container>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
	};
};

export default connect(null, mapDispatchToProps)(HomeScreenContainer);

const Container = styled.View`
	flex: 1;
`;
