import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../constants/colors';

export default function ExerciseAction({onDone}) {
  const [starting, setStarting] = useState(false);
  return (
    <View style={{flexDirection: 'row', padding: 4}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, {backgroundColor: starting ? 'red' : 'green'}]}
        onPress={() => {
          if (!starting) {
            setStarting(true);
            return;
          }
          onDone();
          setStarting(false);
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          {starting ? 'DONE' : 'START'}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.8} style={[styles.button]}>
        <Text style={{color: 'white', fontSize: 16}}>DONE</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = {
  button: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
};
