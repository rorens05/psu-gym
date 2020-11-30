import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../../global/navigations/Header'
import WorkoutCard from './WorkoutCard'

export default function WorkoutList({item, navigation}) {
  return (
    <View style={{paddingBottom: 12}}>
      {item.data.map((exercise, key) => {
        return <WorkoutCard item={exercise} key={key} onPress={() => {
          if(exercise.exercises != null){
            navigation.navigate("Exercises", {exercise})
          }else{
            alert("No exercise assigned yet, undergoing development")
          }
        }}/>
      })}
    </View>
  )
}
