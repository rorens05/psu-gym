import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR } from '../../../constants/colors'

export default function Navigation({selectedIndex, setSelectedIndex, length}) {
  console.log({selectedIndex, setSelectedIndex, length})
  return (
    <View style={{flexDirection: 'row', padding: 4}}>
      <TouchableOpacity 
        disabled={selectedIndex < 1}
        activeOpacity={0.8}
        onPress={() => setSelectedIndex(selectedIndex - 1)}
        style={[styles.button, selectedIndex > 0 ? {} : styles.disabledButton]}
      >
        <Text style={[styles.text]}>PREV</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        disabled={selectedIndex >= length - 1}
        onPress={() => setSelectedIndex(selectedIndex + 1)}
        activeOpacity={0.8}
        style={[styles.button, selectedIndex < length - 1 ? {} : styles.disabledButton]}
      >
        <Text style={[styles.text]}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  button: {
    flex: 1, 
    backgroundColor: PRIMARY_COLOR, 
    paddingVertical: 12, 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 4
  },
  text: {color: 'white', fontSize: 16},
  disabledButton: {
    backgroundColor: 'gray'
  }
}