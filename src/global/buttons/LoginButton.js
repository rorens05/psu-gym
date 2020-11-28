import React from 'react';
import {Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../../constants/colors';

export default function LoginButton(props) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        color: 'white',
        backgroundColor:
          props.backgroundColor != null
            ? props.backgroundColor
            : PRIMARY_TEXT_COLOR,
        // borderWidth: 1,
        // borderColor: '#FFF',
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        paddingVertical: 8,
        marginHorizontal: 15
        // borderRadius: 5,
      }}>
      <Text style={{color: props.color ? props.color : PRIMARY_COLOR}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
