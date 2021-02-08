import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR} from '../../../../constants/colors';

export default function ExerciseHistoryItem({item}) {
  console.log({item});
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderRadius: 4,
        borderTopColor: PRIMARY_COLOR,
        borderTopWidth: 5,
      }}>
      <Text style={{fontSize: 18}}>{item.name}</Text>
    </View>
  );
}
