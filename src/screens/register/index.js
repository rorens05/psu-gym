import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import SplashLoginContainer from '../../global/containers/SplashLoginContainer';

class Register extends Component {
  render() {
    return (
      <SplashLoginContainer>
        <Text>This is register</Text>
      </SplashLoginContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
