// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import Walker from './src/screens/Walker';
import Client from './src/screens/Client';
import SignUpWalker from './src/screens/SignUpWalker';
import SignUpClient from './src/screens/SignUpClient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpType" component={SignUpType} />
        <Stack.Screen name="SignUpWalker" component={SignUpWalker} />
        <Stack.Screen name="SignUpClient" component={SignUpClient} />
        <Stack.Screen name="Walker" component={Walker} />
        <Stack.Screen name="Client" component={Client} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
