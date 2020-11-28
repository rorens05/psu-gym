import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function index(props) {
	return (
		<TouchableOpacity style={{ width: '100%', backgroundColor: 'white', padding: 15, marginVertical: 1 }}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View
					style={{
						borderWidth: props.status ? 0 : 0.3,
						height: 10,
						width: 10,
						borderRadius: 60,
						backgroundColor: props.status ? '#E61D1D' : 'white'
					}}
				/>
				<Text
					style={{
						fontWeight: props.status ? 'bold' : 'normal',
						marginLeft: 5,
						fontSize: props.status ? 15 : 14
					}}
				>
					{props.txtTitle}
				</Text>
			</View>
			<Text style={{ fontSize: 11, color: '#383a3d', marginLeft: 15 }}>{props.timeStamps}</Text>
		</TouchableOpacity>
	);
}
