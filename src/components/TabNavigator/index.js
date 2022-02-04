import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Walker from '../../screens/Walker';
import WalkerServices from '../../screens/WalkerServices';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../MenuButton';

const Tab = createBottomTabNavigator();

const setMenu = navigation => {
  navigation.setOptions({
    headerLeft: () => (
      <MenuButton iconName="menu" onPress={() => console.log(123)} />
    ),
  });
};

const TabNavigator = ({navigation}) => {
  setMenu(navigation);

  return (
    <>
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
          tabBarIcon: ({color, size}) => {
            <Icon name="eye" color={color} size={size} />
          },
        }}/>
        <Tab.Screen name="Services" component={WalkerServices} options={{
          tabBarIcon: ({color, size}) => {
            <Icon name="eye" color={color} size={size} />
          }
        }}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

