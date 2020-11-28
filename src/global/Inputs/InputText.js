import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function InputText(props) {
  return (
    <View
      style={{
        marginTop: 8,
        paddingVertical: 2,
        borderBottomColor:
          props.borderBottomColor != null ? props.borderBottomColor : 'white',
      }}>
      <TextInput {...props} style={{...props.style, paddingVertical: 0}} />
    </View>
  );
}
