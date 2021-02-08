import React from 'react';
import {View} from 'react-native';
import WorkoutCard from './WorkoutCard';

export default function WorkoutList({item, navigation, data}) {
  return (
    <View style={{paddingBottom: 12}}>
      {item.data.map((exercise, key) => {
        return (
          <WorkoutCard
            item={exercise}
            key={key}
            onPress={() => {
              if (exercise.exercises != null) {
                navigation.navigate('Exercises', {
                  exercise,
                  title: data.title,
                  category: item.title,
                });
              } else {
                if (exercise.type === 'REST') {
                  return;
                }
                alert('No exercise assigned yet, undergoing development');
              }
            }}
          />
        );
      })}
    </View>
  );
}
