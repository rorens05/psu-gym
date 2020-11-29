import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { data } from '../../../constants/data';
import Header from '../../../global/navigations/Header';
const {width} = Dimensions.get("screen");

class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1}}>
				<Header title="Home Fitness - Diet and Workout"/>
				<View style={{ justifyContent: 'center', backgroundColor: '#e6e8ff', flex: 1 }}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate("Category", {data: data.women})} activeOpacity={0.9} style={{ backgroundColor: 'blue', flex: 1}}>
						<Image source={data.women.image} style={{flex: 1, width, opacity: 0.9}}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate("Category", {data: data.men})} activeOpacity={0.9} style={{ backgroundColor: 'blue', flex: 1}}>
						<Image source={data.men.image} style={{flex: 1, width, opacity: 0.9}}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
