import React from 'react'
import { Text, View } from 'react-native'
import WorkoutCard from './WorkoutCard'

export default function WorkoutList({item, navigation}) {
  return (
    <View style={{paddingBottom: 12}}>
      {item.data.map((exercise, key) => {
        return <WorkoutCard item={exercise} key={key} onPress={() => {}}/>
      })}
    </View>
  )
}
