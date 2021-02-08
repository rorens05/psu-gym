import React from 'react';
import {View} from 'react-native';
import {BACKGROUND_COLOR} from '../../constants/colors';
import Header from '../../global/navigations/Header';
import CategoryBtn from './components/CategoryBtn';

export default function Category(props) {
  let {data} = props.route.params;
  return (
    <View style={{backgroundColor: BACKGROUND_COLOR, flex: 1}}>
      <Header title={`${data.title} - Diet and Workout`} />
      {data.categories.map((item, index) => {
        return (
          <CategoryBtn
            item={item}
            onPress={() =>
              props.navigation.navigate('CategoryInfo', {item, data})
            }
            key={index}
          />
        );
      })}
    </View>
  );
}
