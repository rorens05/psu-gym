import React from 'react'
import { TouchableOpacity, Image, Dimensions, Text } from 'react-native'
const {width, height} = Dimensions.get("screen")

export default function CategoryBtn({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{flex: 1, backgroundColor: 'blue', position: "relative", justifyContent: 'center', overflow: 'hidden'}} activeOpacity={0.8}>
      <Image 
        source={item.image} 
        style={{width, flex: 1, opacity: 0.8, position: 'absolute', height: height / 4}}
      />
      <Text 
        style={{ marginHorizontal: 8, fontSize: 38, fontWeight: "bold", color: "white"}}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}
