// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import SignUpGlobalStep1 from './src/screens/SignUpGlobalStep1';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpType" component={SignUpType} />
        <Stack.Screen name="SignUpGlobalStep1" component={SignUpGlobalStep1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
