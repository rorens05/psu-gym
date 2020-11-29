import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../../../constants/colors'
const {width} = Dimensions.get("screen")
export default function DietInfo({data}) {
  return (
    <View style={{
      backgroundColor: 'white', 
      marginTop: 16, 
      marginHorizontal: 12, 
      borderRadius: 4,
      borderTopWidth: 6,
      borderTopColor: PRIMARY_COLOR
    }}>
      <Text style={{fontSize: 18, paddingHorizontal: 12, textAlign: 'center'}}>{data}</Text>
    </View>
  )
}
