import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {connect} from 'react-redux';
import SplashLoginContainer from '../../global/containers/SplashLoginContainer';

// TODO:
//  Check if there is a valid token
//  Check if user is logged in then redirect to main view
//  else redirect to login

class Splashscreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('Dashboard');
    }, 1000);
  };

  render() {
    return (
      <SplashLoginContainer>
        <Text style={{color: 'white'}}>Dagupan, Pangasinan</Text>
      </SplashLoginContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
