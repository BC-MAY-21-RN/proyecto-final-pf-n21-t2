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
import GlobalCurrentService from '../../GlobalCurrentService'
import AddReview from '../../AddReview'
import ClientChoosePet from '../../ClientChoosePet'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestPosition from '../../TestPosition'

const Stack = createNativeStackNavigator()

const NavigationInit = () => {
  realtimeLocation.listen()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ contentStyle: { backgroundColor: 'white' }, headerStyle: { backgroundColor: '#A239EA' }, headerTintColor: '#fff' } }><Stack.Screen name="Login" component={SignWelcome} />
          <Stack.Screen name="TestPosition" component={TestPosition} options={{ title: 'Test position' }}/><Stack.Screen name="SignUpType" component={SignWelcome} options={{ title: 'Sign Up' }}/><Stack.Screen name="SignUpWalker" component={SignUpWalker} options={{ title: 'Sign Up' }}/>
          <Stack.Screen name="SignUpClient" component={SignUpClient} options={{ title: 'Sign Up' }}/><Stack.Screen name="Walker" component={TabNavigator} />
          <Stack.Screen name="Client" component={TabNavigator} /><Stack.Screen name="WalkerServices" component={WalkerServices} />
          <Stack.Screen name="SettingsUser" component={SettingsUser} options={{ title: 'Settings' }}/><Stack.Screen name="WalkerDetailsClient" component={WalkerDetailsClient} options={{ title: 'Client Details' }}/>
          <Stack.Screen name="ClientWalkers" component={ClientWalkers} options={{ title: 'Dog Walkers' }}/>
          <Stack.Screen name="ClientDogWalker" component={ClientDogWalker} options={{ title: 'Dog Walkers' }}/>
          <Stack.Screen name="ClientWalkerReviews" component={ClientWalkerReviews} options={{ title: 'Reviews' }}/>
          <Stack.Screen name="ClientDateForm" component={ClientDateForm} />
          <Stack.Screen name="UserSettingsWalker" component={UserSettingsWalker} options={{ title: 'Settings' }}/>
          <Stack.Screen name="HelpUser" component={HelpUser} options={{ title: 'Help' }}/>
          <Stack.Screen name="Pets" component={Pets} options={{ title: 'Your Pets' }}/>
          <Stack.Screen name="AddPet" component={AddPet} options={{ title: 'Add New Pet' }}/>
          <Stack.Screen name="PetInformation" component={PetInformation} options={{ title: 'Pet Details' }}/>
          <Stack.Screen name="AboutUs" component={AboutUS} options={{ title: 'Team' }}/>
          <Stack.Screen name="ToHireWalkerSelection" component={ToHireWalkerSelection} options={{ title: 'Hire Your Walker' }}/>
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="FormTravel" component={FormTravel} options={{ title: 'Walk Form' }} /><Stack.Screen name="ClientChoosePet" component={ClientChoosePet} options={{ title: 'Your Pets' }}/>
          <Stack.Screen name="AddReview" component={AddReview} options={{ title: 'New Review' }}/><Stack.Screen name="GlobalCurrentService" component={GlobalCurrentService} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default NavigationInit
