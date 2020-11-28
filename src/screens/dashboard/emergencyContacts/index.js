import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../global/navigations/Header';
import EmergencyContact from './components/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class History extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          contact_id: 1,
          letter: 'G',
          contactName: 'Guidance Office',
          color: '#8d2196'
        },
        {
          contact_id: 2,
          letter: 'S',
          contactName: 'Security Campus Guard',
          color: '#8366ad'
        },
        {
          contact_id: 3,
          letter: 'P',
          contactName: 'Police Station',
          color: '#59b0d9'
        },
        {
          contact_id: 4,
          letter: 'F',
          contactName: 'Fire Station',
          color: '#59b0d9'
        },
      ]
    }
  }

  renderItem = ({ item }) => {
    return(
      <EmergencyContact
        letter = { item.letter }
        contactName = {item.contactName}
        color = {item.color}
        onPress = {()=> this.props.navigation.navigate('Message')}
      />
    )
  }



  render() {
    return (
      <View style = {{ backgroundColor: '#c7d7f2', flex: 1 }}>
        <Header title="Emergency Contacts" />
        <FlatList data = {this.state.data} renderItem = {this.renderItem} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(History);
