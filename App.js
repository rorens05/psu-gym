import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Register from './src/screens/register';
import Login from './src/screens/login';
import SplashScreen from './src/screens/splashscreen/index';
import store from './src/store/index';
import Dashboard from './src/screens/dashboard';
import Message from './src/screens/dashboard/emergencyContacts/emergencyMessage';

const Stack = createStackNavigator();

export default function App() {
  // alert('Development Build');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Message" component={Message} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
