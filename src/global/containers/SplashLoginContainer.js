import React from 'react';
import { View, Image, Text, Dimensions, KeyboardAvoidingView } from 'react-native';
import { PRIMARY_COLOR } from '../../constants/colors';
const { height, width } = Dimensions.get('window');
const logo = require('./../../assets/images/CampusSafe.png')

export default function SplashLoginContainer({ children }) {
	return (
		<View
			style={{
				height
			}}
		>
			<View
				style={{
					backgroundColor: `${PRIMARY_COLOR}D9`,
					flex: 1
				}}
			>
				<View
					style={{
						alignItems: 'center',
						marginBottom: 12
					}}
				>
					<Image source={require("../../assets/images/splash.jpg")} style={{height, width}} resizeMode="cover"/>
					<Text style={{ color: '#42454a', fontFamily: 'Helvetica', fontSize: 11, fontWeight: 'bold' }}>Workout and Diet Plan Mobile Application</Text>
				</View>
			</View>
		</View>
	);
}

