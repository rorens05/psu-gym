import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {BACKGROUND_COLOR} from '../../constants/colors';
import Header from '../../global/navigations/Header';
import Exercise from './components/Exercise';
import ExerciseAction from './components/ExerciseAction';
import Navigation from './components/Navigation';

export default function Exercises(props) {
  let {exercise, title, category} = props.route.params;
  console.log({exercise, title, category});

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={{backgroundColor: BACKGROUND_COLOR, flex: 1}}>
      <Header title={exercise.title} />
      <Navigation
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        length={exercise.exercises.length}
      />
      <ScrollView style={{flex: 1}}>
        <Exercise selectedExercise={exercise.exercises[selectedIndex]} />
        <ExerciseAction
          onDone={async () => {
            console.log(
              `${title.toUpperCase()} ${category} ${
                exercise.exercises[selectedIndex].title
              }`,
            );
            let items = await AsyncStorage.getItem('items');
            if (items == null) {
              items = [];
            } else {
              items = JSON.parse(items);
            }
            items.push({
              name: `${title.toUpperCase()} ${category} ${
                exercise.exercises[selectedIndex].title
              }`,
              date: new Date(),
            });

            await AsyncStorage.setItem('items', JSON.stringify(items));
            console.log({
              savedItems: JSON.parse(await AsyncStorage.getItem('items')),
            });
          }}
        />
      </ScrollView>
    </View>
  );
}
