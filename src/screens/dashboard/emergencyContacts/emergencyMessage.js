import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './../../../global/navigations/Header';

export default class emergencyMessage extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#E2E7F3' }}>
				<Header backIcon={true} title="Emergency Contacts" />
				<View style={{ flex: 1, padding: 17, justifyContent: 'space-between' }}>
					<View style={{ marginTop: 15, width: '100%' }}>
						<Text style={{ fontWeight: 'bold' }}>Send to:</Text>
						<TextInput style={{ marginTop: 5, backgroundColor: '#ffffff', height: 50, padding: 10 }}>
							Guidance Office
						</TextInput>
						<TextInput
							style={{ marginTop: 30, backgroundColor: '#ffffff', minHeight: 300, padding: 10 }}
							multiline={true}
							textAlignVertical="top"
						>
							Guidance Office
						</TextInput>
						<View
							style={{
								width: '100%',
								alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25
							}}
						>
							<View
								style={{
									width: '80%',
									justifyContent: 'space-between',
									flexDirection: 'row'
								}}
							>
								<TouchableOpacity style = {{ width: 130, height: 40, backgroundColor: '#4472B0', justifyContent: 'center', alignItems: 'center' }}>
									<Text style = {{ color: '#ffffff', fontWeight: 'bold', fontSize: 12 }}>Cancel</Text>
								</TouchableOpacity>
								<TouchableOpacity style = {{borderWidth: 1, borderColor: '#4472B0' ,width: 130, height: 40, backgroundColor: '#E2E7F3', justifyContent: 'center', alignItems: 'center' }}>
									<Text style = {{ color: '#4472B0', fontWeight: 'bold', fontSize: 12 }}>Send</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
        <View style = {{ width: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
          <Text style = {{ color: '#707070', fontSize: 9 }}>Group 5 PSU-LC</Text>
        </View>
			</View>
		);
	}
}
