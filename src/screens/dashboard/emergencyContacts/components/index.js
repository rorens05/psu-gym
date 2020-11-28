import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const mail = require('../../../../assets/images/email.png');
export default function index(props) {
	return (
		<TouchableOpacity style={{ width: '100%', backgroundColor: 'white', padding: 15, marginVertical: 1 }} onPress = {props.onPress}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View
					style={{
						height: 60,
						width: 60,
						borderRadius: 60,
						backgroundColor: props.color,
						alignItems: 'center',
						justifyContent: 'center',
						lexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{props.letter}</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text
						style={{
							marginLeft: 15,
							fontWeight: 'bold',
							fontSize: 18
						}}
					>
						{props.contactName}
					</Text>
				</View>
				<View>
					<Image source={mail} style={{ width: 25, height: 25 }} resizeMode="contain" />
				</View>
			</View>
		</TouchableOpacity>
	);
}
