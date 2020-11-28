import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../global/navigations/Header';
const {width} = Dimensions.get("screen");

class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1}}>
				<Header title="Home Fitness - Diet and Workout"/>
				<View style={{ justifyContent: 'center', backgroundColor: '#e6e8ff', flex: 1 }}>
					<TouchableOpacity activeOpacity={0.9} style={{flex: 1}}>
						<Image source={require('../../../assets/images/splash.jpg')} style={{flex: 1, width}}/>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={{flex: 1}}>
						<Image source={require('../../../assets/images/splash.jpg')} style={{flex: 1, width}}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
