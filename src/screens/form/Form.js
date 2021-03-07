import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  Picker,
  Button,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY_COLOR} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

export default function Form({navigation}) {
  const [weight, setWeight] = useState(0);
  const [heightkg, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [sickness, setSickness] = useState('NONE');
  const onSubmit = () => {
    if (heightkg == '') {
      alert('Please input your height');
      return;
    }
    if (weight == '') {
      alert('Please input your weight');
      return;
    }
    if (age == '') {
      alert('Please input your age');
      return;
    }

    AsyncStorage.setItem('sickness', sickness);
    navigation.replace('Dashboard');
  };

  return (
    <View
      style={{
        height,
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: `${PRIMARY_COLOR}D9`,
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 12,
            flex: 1,
          }}>
          <Image
            source={require('../../assets/images/splash.jpg')}
            style={{
              height,
              width,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.5,
              backgroundColor: 'black',
            }}
            resizeMode="cover"
            blurRadius={3}
          />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              flex: 1,
              width,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                paddingVertical: 30,
                paddingHorizontal: 16,
                borderTopColor: PRIMARY_COLOR,
                borderTopWidth: 5,
                borderRadius: 4,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/ic_launcher_round.png')}
                />
              </View>
              <TextInput
                onChangeText={(text) => setHeight(text)}
                placeholder="Height (cm)"
                keyboardType={'phone-pad'}
                style={{
                  width: width * 0.8,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
              />
              <TextInput
                onChangeText={(text) => setWeight(text)}
                placeholder="Weight (kg)"
                keyboardType={'phone-pad'}
                style={{
                  width: width * 0.8,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
              />
              <TextInput
                onChangeText={(text) => setAge(text)}
                placeholder="Age"
                keyboardType={'phone-pad'}
                style={{
                  width: width * 0.8,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
              />
              <View
                style={{
                  width: width * 0.8,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}>
                <Picker
                  onValueChange={(value) => setSickness(value)}
                  selectedValue={sickness}>
                  <Picker.Item label="Select Sickness" value="NONE" />
                  <Picker.Item label="Obesity" value="Obesity" />
                  <Picker.Item label="Highblood" value="Highblood" />
                  <Picker.Item label="Anemic" value="Anemic" />
                  <Picker.Item label="Asthma" value="Asthma" />
                  <Picker.Item label="Diabetes" value="Diabetes" />
                  <Picker.Item label="Hyperacidity" value="Hyperacidity" />
                  <Picker.Item label="Kidney Problem" value="Kidney Problem" />
                  <Picker.Item label="Heart Disease" value="Heart Disease" />
                </Picker>
              </View>
              <TouchableOpacity onPress={onSubmit}>
                <Text
                  style={{
                    textAlign: 'center',
                    backgroundColor: PRIMARY_COLOR,
                    color: 'white',
                    padding: 12,
                    marginTop: 16,
                    borderRadius: 5,
                  }}>
                  START
                </Text>
              </TouchableOpacity>

              <Text style={{fontWeight: 'bold', marginTop: 12}}>NOTE:</Text>
              <Text style={{}}>IF YOU HAVE FOOD ALLERGY, GO TO FOOD GUIDE</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
