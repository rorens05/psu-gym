import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import SplashScreen from './src/screens/splashscreen/index';
import store from './src/store/index';
import Dashboard from './src/screens/dashboard';
import Category from './src/screens/category/Category';
import CategoryInfo from './src/screens/categoryInfo/CategoryInfo';
import Exercises from './src/screens/exercises/Exercises';
import Form from './src/screens/form/Form';

const Stack = createStackNavigator();

export default function App() {
  // alert('Development Build');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="CategoryInfo" component={CategoryInfo} />
          <Stack.Screen name="Exercises" component={Exercises} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
