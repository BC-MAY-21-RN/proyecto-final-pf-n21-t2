// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import Walker from './src/screens/Walker';
import Client from './src/screens/Client';
import SignUpWalker from './src/screens/SignUpWalker';
import SignUpClient from './src/screens/SignUpClient';
import ClientWalkers from './src/screens/ClientWalkers';
import ClientDogWalker from './src/screens/ClientDogWalker';
import ClientDateForm from './src/screens/ClientDateForm';
import ClientWalkerReviews from './src/screens/ClientWalkerReviews';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ClientDateForm'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpType" component={SignUpType} />
        <Stack.Screen name="SignUpWalker" component={SignUpWalker} />
        <Stack.Screen name="SignUpClient" component={SignUpClient} />
        <Stack.Screen name="Walker" component={Walker} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="ClientWalkers" component={ClientWalkers} />
        <Stack.Screen name="ClientDogWalker" component={ClientDogWalker} />
        <Stack.Screen name="ClientWalkerReviews" component={ClientWalkerReviews} />
        <Stack.Screen name="ClientDateForm" component={ClientDateForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
