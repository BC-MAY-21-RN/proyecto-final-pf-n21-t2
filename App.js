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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/components/TabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Walker'>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
