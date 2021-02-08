import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../../global/navigations/Header';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {PRIMARY_COLOR} from '../../../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import ExerciseHistoryItem from './components/ExerciseHistoryItem';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedDate: {dateString: new Date().toISOString().split('T')[0]},
    };
  }

  componentDidMount = async () => {
    const {selectedDate} = this.state;
    let items = await AsyncStorage.getItem('items');
    if (items == null) {
      items = [];
    } else {
      items = JSON.parse(items);
    }
    this.setState({items, selectedDate});
  };

  render() {
    const {selectedDate, items} = this.state;
    console.log({selectedDate, items});
    return (
      <View style={{backgroundColor: '#c7d7f2', flex: 1}}>
        <Header title="Calendar" />
        <View style={{flex: 1}}>
          <ScrollView>
            <View>
              <Calendar
                markedDates={
                  selectedDate != null
                    ? {
                        [selectedDate.dateString]: {
                          selected: true,
                          selectedColor: PRIMARY_COLOR,
                        },
                      }
                    : {}
                }
                onDayPress={(selectedDate) => {
                  console.log('selected selectedDate', selectedDate);
                  this.setState({selectedDate});
                }}
                enableSwipeMonths={true}
              />
              <View style={{paddingVertical: 12}}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: 'white',
                    marginHorizontal: 16,
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    fontWeight: 'bold',
                  }}>
                  Finished Exercises
                </Text>
                {items
                  .filter((item) => {
                    let startDate = new Date(selectedDate.dateString);
                    startDate.setHours(0);
                    startDate.setMinutes(0);
                    startDate.setSeconds(0);

                    let endDate = new Date(selectedDate.dateString);
                    endDate.setHours(0);
                    endDate.setMinutes(0);
                    endDate.setSeconds(0);
                    endDate.setDate(endDate.getDate() + 1);

                    console.log({
                      startDate,
                      endDate,
                    });

                    let itemDate = new Date(item.date);
                    return itemDate > startDate && itemDate < endDate;
                  })
                  .map((item, index) => (
                    <ExerciseHistoryItem item={item} key={index} />
                  ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Notification;
