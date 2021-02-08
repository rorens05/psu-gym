import React, {Component} from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {data} from '../../../constants/data';
import Header from '../../../global/navigations/Header';
const {width} = Dimensions.get('screen');

export default function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header title="Home Fitness - Diet and Workout" />
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#e6e8ff',
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Category', {data: data.women})}
          activeOpacity={0.9}
          style={{flex: 1}}>
          <Image
            source={data.women.image}
            style={{flex: 1, width, opacity: 0.9}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Category', {data: data.men})}
          activeOpacity={0.9}
          style={{flex: 1}}>
          <Image
            source={data.men.image}
            style={{flex: 1, width, opacity: 0.9}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
