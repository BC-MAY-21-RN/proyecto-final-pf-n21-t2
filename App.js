// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import Walker from './src/screens/Walker';
import SignUpWalker from './src/screens/SignUpWalker';
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
        <Stack.Screen name="Walker" component={Walker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
