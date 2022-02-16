import * as React from 'react';
import Login from '../../Logins';
import SignUpType from '../../SignUpType';
import WalkerServices from '../../WalkerServices';
import SignUpWalker from '../../SignUpWalker';
import SignUpClient from '../../SignUpClient';
import SettingsUser from '../../DrawerScreens/SettingsUser';
import WalkerDetailsClient from '../../WalkerDetailsClient';
import ClientWalkers from '../../ClientWalkers';
import ClientDogWalker from '../../ClientDogWalker';
import ClientDateForm from '../../ClientDateForm';
import ClientWalkerReviews from '../../ClientWalkerReviews';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../../../components/TabNavigator';
import UserSettingsWalker from '../../DrawerScreens/UserSettingsWalker';
import HelpUser from '../../DrawerScreens/HelpUser';
import realtimeLocation from '../../../assets/controllers/updateRealtimeLocation';
import Pets from '../../Pets';
import AddPet from '../../AddPet';
import PetInformation from '../../PetInformation';
import ToHireWalkerSelection from '../../ToHireWalkerSelection';
import AboutUS from '../../AboutUS';
import Reviews from '../../Reviews';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

realtimeLocation.listen();

const NavigationInit = () => {
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName='Reviews'><Stack.Screen name="Login" component={Login} />
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
          <Stack.Screen name="ToHireWalkerSelection" component={ToHireWalkerSelection} />
          <Stack.Screen name="Reviews" component={Reviews} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default NavigationInit;
