import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Walker from '../../screens/Walker';
import WalkerServices from '../../screens/WalkerServices';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <Tab.Screen name="Home" component={Walker}/>
            <Tab.Screen name="Services" component={WalkerServices}/>
        </Tab.Navigator>
  );
};

export default TabNavigator;

