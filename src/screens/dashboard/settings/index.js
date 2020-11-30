import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../global/navigations/Header';

class Settings extends Component {
  render() {
    return (
      <View>
        <Header title="About"/>
        <Text>UNDERGOING DEVELOPMENT</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
