import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {PRIMARY_COLOR} from '../../../constants/colors';
import Header from '../../../global/navigations/Header';

class Settings extends Component {
  render() {
    return (
      <View>
        <Header title="About" />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: 20,
            margin: 20,
            borderRadius: 4,
            borderTopColor: PRIMARY_COLOR,
            borderTopWidth: 5,
          }}>
          <Text style={{fontSize: 20, marginBottom: 8, fontWeight: 'bold'}}>
            PSU GYM THESIS
          </Text>
          <Text style={{textAlign: 'center'}}>
            A fitness app is an application that can be downloaded on any mobile
            device and used anywhere to get fit. They can be used as a platform
            to promote healthy behavior change with personalized workouts,
            fitness advice and nutrition plans.
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
