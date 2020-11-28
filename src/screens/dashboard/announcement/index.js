import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../global/navigations/Header';
import AnnouncementsList from './components/index';

class Notification extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          txtTitle: 'Important Update: Classes will resume on Monday',
          timeStamps: 'Today 9:10am',
          status: true
        },
        {
          txtTitle: 'Thunder Storm Alarm: CLasses will be suspended tommorrow',
          timeStamps: 'Yesterday 9:10am',
          status: true
        },
        {
          txtTitle: 'Pabagsak ka na pre GG ka ',
          timeStamps: 'Today 9:10am',
          status: false
        },
        {
          txtTitle: 'Mr Cornista 9 absences ano pa balak mo? ',
          timeStamps: 'Today 10:10am',
          status: true
        },
      ]
    }
  }
  

  renderItems = ({item}) => {
    return(
      <AnnouncementsList
        txtTitle = { item.txtTitle}
        timeStamps = {item.timeStamps}
        status = {item.status}
      />
    )
  }

  render() {
    return (
      <View style = {{ backgroundColor: '#c7d7f2', flex: 1 }}>
        <Header title="Announcements" />
        <FlatList data = {this.state.data} renderItem = {this.renderItems} style = {{ marginTop: 1 }}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
