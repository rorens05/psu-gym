import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BACKGROUND_COLOR } from '../../constants/colors'
import Header from '../../global/navigations/Header'
import DietInfo from './components/DietInfo'
import WorkoutList from './components/WorkoutList'

export default function CategoryInfo(props) {
  let {item} = props.route.params
  console.log({item})
  return (
    <View style={{backgroundColor: BACKGROUND_COLOR, flex: 1}}>
      <Header title={`Category Info`}/>
      <ScrollView style={{flex: 1, }}>
        {item.type == "WORKOUT" && <WorkoutList item={item} navigation={props.navigation}/>}
        {item.type == "DIET" && <DietInfo data={item.data} navigation={props.navigation}/>}
      </ScrollView>
    </View>
  )
}
