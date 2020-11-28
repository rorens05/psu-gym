import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
