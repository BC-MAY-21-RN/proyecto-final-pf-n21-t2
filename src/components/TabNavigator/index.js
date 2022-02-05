import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Walker from '../../screens/Walker';
import WalkerServices from '../../screens/WalkerServices';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../MenuButton';
import theme from '../../themes/lights';

const Tab = createBottomTabNavigator();

const setMenu = navigation => {
  navigation.setOptions({
    headerLeft: () => (
      <MenuButton iconName="menu" onPress={() => navigation.navigate('Settings')} />
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
            backgroundColor: '#F0D9E7', 
          },
          tabBarLabelStyle: {
            fontSize: theme.font.m,
          },
        }
      }>
        
        <Tab.Screen name="Home" component={Walker} options={{
          tabBarIcon: color => <Icon name="menu" color={color} size={24} />,
        }}/>
        <Tab.Screen name="Services" component={WalkerServices}  options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="menu" size={24} color="#000000" />
          }
        }}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

