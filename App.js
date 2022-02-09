// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import WalkerServices from './src/screens/WalkerServices';
import Client from './src/screens/Client';
import SignUpWalker from './src/screens/SignUpWalker';
import SignUpClient from './src/screens/SignUpClient';
import SettingsClient from './src/screens/DrawerScreens/SettingsClient';
import SettingsWalker from './src/screens/DrawerScreens/SettingsWalker';
import WalkerDetailsClient from './src/screens/WalkerDetailsClient';
import ClientWalkers from './src/screens/ClientWalkers';
import ClientDogWalker from './src/screens/ClientDogWalker';
import ClientDateForm from './src/screens/ClientDateForm';
import ClientWalkerReviews from './src/screens/ClientWalkerReviews';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/components/TabNavigator';
import realtimeLocation from './src/assets/controllers/updateRealtimeLocation';

const Stack = createNativeStackNavigator();

function App() {
  realtimeLocation.listen();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpType" component={SignUpType} />
        <Stack.Screen name="SignUpWalker" component={SignUpWalker} />
        <Stack.Screen name="SignUpClient" component={SignUpClient} />
        <Stack.Screen name="Walker" component={TabNavigator} />
        <Stack.Screen name="WalkerServices" component={WalkerServices} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="SettingsWalker" component={SettingsWalker} />
        <Stack.Screen name="SettingsClient" component={SettingsClient} />
        <Stack.Screen name="WalkerDetailsClient" component={WalkerDetailsClient} />
        <Stack.Screen name="ClientWalkers" component={ClientWalkers} />
        <Stack.Screen name="ClientDogWalker" component={ClientDogWalker} />
        <Stack.Screen name="ClientWalkerReviews" component={ClientWalkerReviews} />
        <Stack.Screen name="ClientDateForm" component={ClientDateForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
