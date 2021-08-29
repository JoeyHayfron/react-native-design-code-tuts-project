import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, Linking, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import Markdown from "react-native-showdown";

const SectionScreen = (props) => {
	const { section } = props.route.params;
	return (
		<ScrollView>
			<Container>
				<StatusBar hidden />
				<Cover>
					<Image source={{ uri: section.image.url }} />
					<Title>{section.title}</Title>
					<Subtitle>{section.subtitle}</Subtitle>
					<LogoWrapper>
						<Logo source={{ uri: section.logo.url }} />
						<Caption>{section.caption}</Caption>
					</LogoWrapper>
				</Cover>
				<TouchableOpacity
					onPress={() => props.navigation.goBack()}
					style={{ position: "absolute", top: 20, right: 20 }}>
					<CloseView>
						<Ionicons name='ios-close' size={32} color='#4775f2' />
					</CloseView>
				</TouchableOpacity>
				<Content>
					{/* <WebView
					source={{ html: htmlContent + htmlStyles }}
					scalesPageToFit={false}
					scrollEnabled={false}
					onShouldStartLoadWithRequest={(e) => {
						if (e.url != "about:blank") {
							Linking.openURL(e.url);
							return false;
						} else {
							return true;
						}
					}}
				/> */}
					<Markdown
						markdown={section.content}
						scrollEnabled={false}
						scalesPageToFit={false}
						css={htmlStyles}
					/>
				</Content>
			</Container>
		</ScrollView>
	);
};

export default SectionScreen;

const htmlStyles = `
*{
	font-family: -apple-system, Roboto;
	margin: 0;
	padding: 0;
	font-size: 17px;
	font-weight: normal;
	color: #3c4560;
	line-height: 24px;
}

h2{
	font-size: 20px;
	text-transform: uppercase;
	color: #b8bece;
	font-weight: 600;
	margin-top: 50px;
}

p{
	margin-top: 20px;
}

a{
	color: #4775f2;
	font-weight: 600;
	text-decoration: none;
}

strong{
	font-weight: 700;
}

img{
	width: 100%;
	border-radius: 10px;
	margin-top: 20px;
}

pre{
	padding: 20px;
	background: #212c4f;
	overflow: hidden;
	word-wrap: break-word;
	border-radius: 10px;
	margin-top: 20px;
}

code{
	color: white;
}
`;

const Content = styled.View`
	height: 1200px;
	padding: 20px;
	background-color: white;
`;

const Container = styled.View`
	flex: 1;
`;

const Cover = styled.View`
	height: 375px;
`;

const Image = styled.Image`
	height: 100%;
	width: 100%;
	position: absolute;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: white;
	position: absolute;
	top: 58px;
	left: 20px;
	width: 160px;
`;

const Subtitle = styled.Text`
	font-size: 17px;
	position: absolute;
	color: white;
	bottom: 20px;
	left: 20px;
`;

const CloseView = styled.View`
	height: 32px;
	width: 32px;
	background: white;
	border-radius: 16px;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	elevation: 2;
`;

const LogoWrapper = styled.View`
	flex-direction: row;
	position: absolute;
	top: 20px;
	left: 20px;
`;

const Logo = styled.Image`
	height: 25px;
	width: 25px;
`;

const Caption = styled.Text`
	font-size: 16px;
	margin-left: 10px;
	color: white;
	text-transform: uppercase;
	align-self: center;
	justify-content: center;
`;
