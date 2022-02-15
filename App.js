// In App.js in a new project

import * as React from 'react';
import Login from './src/screens/Logins';
import SignUpType from './src/screens/SignUpType';
import WalkerServices from './src/screens/WalkerServices';
import SignUpWalker from './src/screens/SignUpWalker';
import SignUpClient from './src/screens/SignUpClient';
import SettingsUser from './src/screens/DrawerScreens/SettingsUser';
import WalkerDetailsClient from './src/screens/WalkerDetailsClient';
import ClientWalkers from './src/screens/ClientWalkers';
import ClientDogWalker from './src/screens/ClientDogWalker';
import ClientDateForm from './src/screens/ClientDateForm';
import ClientWalkerReviews from './src/screens/ClientWalkerReviews';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/components/TabNavigator';
import UserSettingsWalker from './src/screens/DrawerScreens/UserSettingsWalker';
import HelpUser from './src/screens/DrawerScreens/HelpUser';
import realtimeLocation from './src/assets/controllers/updateRealtimeLocation';
import Pets from './src/screens/Pets';
import AddPet from './src/screens/AddPet';
import PetInformation from './src/screens/PetInformation';
import AboutUS from './src/screens/AboutUS';

const Stack = createNativeStackNavigator();

realtimeLocation.listen();
function App() {

  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpType" component={SignUpType} />
        <Stack.Screen name="SignUpWalker" component={SignUpWalker} />
        <Stack.Screen name="SignUpClient" component={SignUpClient} />
        <Stack.Screen name="Walker" component={TabNavigator} /> 
        <Stack.Screen name="Client" component={TabNavigator} />
        <Stack.Screen name="WalkerServices" component={WalkerServices} /> 
        <Stack.Screen name="SettingsUser" component={SettingsUser} />
        <Stack.Screen name="WalkerDetailsClient" component={WalkerDetailsClient} />
        <Stack.Screen name="ClientWalkers" component={ClientWalkers} />
        <Stack.Screen name="ClientDogWalker" component={ClientDogWalker} />
        <Stack.Screen name="ClientWalkerReviews" component={ClientWalkerReviews} />
        <Stack.Screen name="ClientDateForm" component={ClientDateForm} />
        <Stack.Screen name="UserSettingsWalker" component={UserSettingsWalker} />
        <Stack.Screen name="HelpUser" component={HelpUser} />
        <Stack.Screen name="Pets" component={Pets} />
        <Stack.Screen name="AddPet" component={AddPet} />
        <Stack.Screen name="PetInformation" component={PetInformation} />
        <Stack.Screen name="AboutUs" component={AboutUS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
