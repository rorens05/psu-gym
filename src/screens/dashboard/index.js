import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {PRIMARY_COLOR} from '../../constants/colors';
import Home from './home';
import Notification from './announcement';
import Settings from './settings';

const OPTIONS = {
  home: 'home',
  calendar: 'calendar',
  settings: 'settings',
};

class Dashboard extends Component {
  state = {
    active: OPTIONS.home,
  };

  renderSelected = () => {
    const {active} = this.state;
    switch (active) {
      case OPTIONS.home:
        return <Home navigation={this.props.navigation} />;
      case OPTIONS.calendar:
        return <Notification navigation={this.props.navigation} />;
      case OPTIONS.settings:
        return <Settings navigation={this.props.navigation} />;
      default:
        return <Text>Invalid Option</Text>;
    }
  };

  render() {
    const {active} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
          <this.renderSelected />
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TabButton
            source={require('../../assets/images/tab_home_80x80.png')}
            title="Home"
            active={active === OPTIONS.home}
            onPress={() => this.setState({active: OPTIONS.home})}
          />
          <TabButton
            source={require('../../assets/images/tab_notification_80x80.png')}
            title="Calendar"
            active={active === OPTIONS.calendar}
            onPress={() => this.setState({active: OPTIONS.calendar})}
          />
          <TabButton
            source={require('../../assets/images/food-guide-icon.png')}
            title="Food Guide"
            active={active === OPTIONS.settings}
            onPress={() => this.setState({active: OPTIONS.settings})}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const INACTIVE_COLOR = '#525252';
const ACTIVE_COLOR = PRIMARY_COLOR;

const TabButton = ({onPress, source, title, active}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{alignItems: 'center'}}>
      <Image
        source={source}
        style={{
          width: 20,
          height: 20,
          marginBottom: 4,
          tintColor: active ? ACTIVE_COLOR : INACTIVE_COLOR,
        }}
        resizeMode="contain"
      />
      <Text
        style={{fontSize: 12, color: active ? ACTIVE_COLOR : INACTIVE_COLOR}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
