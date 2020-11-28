import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../../constants/colors';
const logo = require('./../../assets/images/white.png')
const back = require('./../../assets/images/back.png')

const profileIcon = require('../../assets/images/profile-user.png');
export default function Header(props) {

  renderBackIcon = () => {
		return (
			props.backIcon && (
				<TouchableOpacity style={{ width: 45, height: 35 }} onPress={props.onBackPress}>
					<Image source={back} style={{ width: 30, height: 30, tintColor: '#ffffff' }} />
				</TouchableOpacity>
			)
		);
	};

	return (
		<View
			style={{ backgroundColor: PRIMARY_COLOR, paddingHorizontal: 16, height: 60, justifyContent: 'center' }}
		>
			<Text style={{color: PRIMARY_TEXT_COLOR, fontSize: 20}}>{props.title}</Text>
      {renderBackIcon()}
		</View>
	);
}
