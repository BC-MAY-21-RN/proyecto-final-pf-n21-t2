import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Walker from '../../screens/Walker';
import WalkerServices from '../../screens/WalkerServices';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarInactiveTintColor: 'black',
                tabBarStyle : {
                    alignItems: 'center',
                    backgroundColor: '#F0D9E7',
                    flexDirection: 'row',
                    height: 80
                }
            }
        }>
            <Tab.Screen name="Home" component={Walker} options={{
                tabBarIcon: ({color, size})=>{
                    <Ionicons name="home-outline" color={color} size={size}/>
                },
                
            }}/>
            <Tab.Screen name="Services" component={WalkerServices} options={{
                tabBarIcon: ({color, size})=>{
                    <Feather name="shopping-bag" color={color} size={size}/>
                }
            }}/>
        </Tab.Navigator>
  );
};

export default TabNavigator;

