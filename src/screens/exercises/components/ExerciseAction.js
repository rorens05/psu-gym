import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../constants/colors';
import Tts from 'react-native-tts';

export default function ExerciseAction({onDone, maxCount}) {
  const [starting, setStarting] = useState(false);
  const [done, setDone] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [weight, setWeight] = useState(0);

  const countDown = () => {
    if (maxCount != null) {
      let count = 1;
      let intervalId = setInterval(() => {
        Tts.speak(count.toString());
        count = count + 1;
        if (count > maxCount) {
          Tts.speak('Done');
          setStarting(false);
          setDone(true);
          Tts.speak('Please input your weight');
          clearInterval(intervalId);
        }
      }, 1000);
      setIntervalId(intervalId);
    }
  };

  return (
    <View>
      {done ? (
        <View style={{flexDirection: 'row', padding: 4, marginTop: 4}}>
          <TextInput
            keyboardType="numeric"
            placeholder="Input your weight in KG"
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              flex: 1,
              marginHorizontal: 4,
              paddingHorizontal: 8,
              height: 45,
            }}
            onChangeText={(text) => setWeight(text)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              {backgroundColor: starting ? 'red' : 'green', marginVertical: 0},
            ]}
            onPress={() => {
              onDone(weight);
              setDone(false);
              alert('Exercise saved');
            }}>
            <Text style={{color: 'white', fontSize: 16}}>
              {starting ? 'STOP' : 'SAVE'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flexDirection: 'row', padding: 4}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              {backgroundColor: starting ? 'red' : 'green'},
            ]}
            onPress={() => {
              if (!starting) {
                setStarting(true);
                countDown();
                return;
              }

              if (maxCount == null) {
                Tts.speak('Please input your weight');
                setDone(true);
              }
              clearInterval(intervalId);
              setStarting(false);
            }}>
            <Text style={{color: 'white', fontSize: 16}}>
              {starting ? 'DONE' : 'START'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
