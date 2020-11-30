import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../../global/navigations/Header';

class Notification extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return (
      <View style = {{ backgroundColor: '#c7d7f2', flex: 1 }}>
        <Header title="Calendar" />
        <View>
          <Text>UNDERGOING DEVELOPMENT</Text>
        </View>
      </View>
    );
  }
}

export default Notification;
