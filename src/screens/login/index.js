import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR, PRIMARY_REGISTER_BUTTON_COLOR } from '../../constants/colors';
import LoginButton from '../../global/buttons/LoginButton';
import SplashLoginContainer from '../../global/containers/SplashLoginContainer';
import InputText from '../../global/Inputs/InputText';

class Login extends Component {
	render() {
		return (
			<SplashLoginContainer>
				{/* <Text style={{ color: 'white', fontSize: 20, marginVertical: 8 }}>EAAPSU</Text> */}
				<View style={{ width: '83%' }}>
					<View>
						<Text style = {{ color: '#42454a' }}>ID Number</Text>
						<InputText
							placeholder="ID number"
							placeholderTextColor="#cccccc"
							style={{ backgroundColor: 'white', width: '100%', height: 46, borderRadius: 5 }}
						/>
					</View>
					<View style={{ marginVertical: 20 }}>
						<Text style = {{ color: '#42454a' }}>Password</Text>
						<InputText
							placeholder="Password"
							placeholderTextColor="#cccccc"
							style={{ backgroundColor: 'white', width: '100%', height: 46, borderRadius: 5 }}
						/>
					</View>
          <View style = {{ width: '100%', alignItems: 'flex-end', marginTop: -10 }}>
            <TouchableOpacity>
              <Text style = {{ fontSize: 11, color: '#42454a' }}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<LoginButton
						text="LOGIN"
						onPress={() => {
							this.props.navigation.replace('Dashboard');
						}}
					/>
					<LoginButton text="REGISTER" backgroundColor={PRIMARY_REGISTER_BUTTON_COLOR} color={'white'} />
				</View>
			</SplashLoginContainer>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
