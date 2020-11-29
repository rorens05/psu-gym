import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR } from '../../../constants/colors'

export default function WorkoutCard({item}) {
  return (
    <TouchableOpacity 
      activeOpacity={0.6} 
      style={{
        backgroundColor: 'red', 
        marginTop: 16, 
        marginHorizontal: 12,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 4,
        borderTopWidth: 6,
        borderTopColor: PRIMARY_COLOR
      }}
    >
      <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>{item.title}</Text>
    </TouchableOpacity>
  )
}
