import React from 'react'
import SignWelcome from '../../SignWelcome'
import WalkerServices from '../../WalkerServices'
import SignUpWalker from '../../SignUpWalker'
import SignUpClient from '../../SignUpClient'
import SettingsUser from '../../DrawerScreens/SettingsUser'
import WalkerDetailsClient from '../../WalkerDetailsClient'
import ClientWalkers from '../../ClientWalkers'
import ClientDogWalker from '../../ClientDogWalker'
import ClientDateForm from '../../ClientDateForm'
import ClientWalkerReviews from '../../ClientWalkerReviews'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from '../../../components/TabNavigator'
import UserSettingsWalker from '../../DrawerScreens/UserSettingsWalker'
import HelpUser from '../../DrawerScreens/HelpUser'
import realtimeLocation from '../../../assets/controllers/updateRealtimeLocation'
import Pets from '../../Pets'
import AddPet from '../../AddPet'
import PetInformation from '../../PetInformation'
import ToHireWalkerSelection from '../../ToHireWalkerSelection'
import AboutUS from '../../AboutUS'
import FormTravel from '../../FormTravel'
import Reviews from '../../Reviews'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const NavigationInit = () => {
  realtimeLocation.listen()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ contentStyle: { backgroundColor: 'white' }, headerStyle: { backgroundColor: '#A239EA' }, headerTintColor: '#fff' } }><Stack.Screen name="Login" component={SignWelcome} />
          <Stack.Screen name="SignUpType" component={SignWelcome} /><Stack.Screen name="SignUpWalker" component={SignUpWalker} />
          <Stack.Screen name="SignUpClient" component={SignUpClient} /><Stack.Screen name="Walker" component={TabNavigator} />
          <Stack.Screen name="Client" component={TabNavigator} /><Stack.Screen name="WalkerServices" component={WalkerServices} />
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
          <Stack.Screen name="FormTravel" component={FormTravel} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default NavigationInit
