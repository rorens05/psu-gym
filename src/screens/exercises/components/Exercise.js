import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../../../constants/colors'

export default function Exercise({selectedExercise}) {
  console.log({selectedExercise})
  return (
    <View style={{paddingHorizontal: 8, }}>
      <Image source={selectedExercise.image} style={{width: '100%', height: 300}} resizeMode='cover'/>
      <View style={{
        backgroundColor: 'red', 
        marginTop: 8, 
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 4,
        borderTopWidth: 6,
        borderTopColor: PRIMARY_COLOR
      }}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 8}}>{selectedExercise.title}</Text>
        <Text>{selectedExercise.description}</Text>
      </View>  
    </View>
  )
}
