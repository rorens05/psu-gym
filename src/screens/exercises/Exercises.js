import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { BACKGROUND_COLOR } from '../../constants/colors'
import Header from '../../global/navigations/Header'
import Exercise from './components/Exercise'
import ExerciseAction from './components/ExerciseAction'
import Navigation from './components/Navigation'

export default function Exercises(props) {
  let {exercise} = props.route.params
  console.log({exercise})

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <View style={{backgroundColor: BACKGROUND_COLOR, flex: 1}}>
      <Header title={exercise.title}/>
      <Navigation selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} length={exercise.exercises.length}/>
      <ScrollView style={{flex: 1}}>
        <Exercise selectedExercise={exercise.exercises[selectedIndex]}/>
        <ExerciseAction/>
      </ScrollView>
    </View>
  )
}
