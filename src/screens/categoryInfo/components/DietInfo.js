import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../constants/colors';
import {
  highblood,
  kidneyProblem,
  obesity,
} from '../../../constants/sickness-diet-plan';
const {width} = Dimensions.get('screen');
export default function DietInfo({data}) {
  const [sickness, setSickness] = useState('NONE');

  const fetchItem = async () => {
    let item = await AsyncStorage.getItem('sickness');
    setSickness(item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const displayItem = () => {
    switch (sickness) {
      case 'Obesity':
        return obesity;
      case 'Kidney Problem':
        return kidneyProblem;
      case 'Highblood':
        return highblood;
      default:
        return data;
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 16,
        marginHorizontal: 12,
        borderRadius: 4,
        borderTopWidth: 6,
        borderTopColor: PRIMARY_COLOR,
      }}>
      <Text style={{fontSize: 18, paddingHorizontal: 12, textAlign: 'center'}}>
        {displayItem()}
      </Text>
    </View>
  );
}
