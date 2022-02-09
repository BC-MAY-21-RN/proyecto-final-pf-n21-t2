import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWalker from '../../screens/HomeWalker';
import HomeClient from '../../screens/HomeClient';
import WalkerServices from '../../screens/WalkerServices';
import ClientDogWalker from '../../screens/ClientDogWalker';
import MenuButton from '../MenuButton';
import theme from '../../themes/lights';
import tabNavUtils from '../../assets/controllers/tabNavigationUtils';

const Tab = createBottomTabNavigator();

const setMenu = (navigation, type) => {
  navigation.setOptions({
    headerLeft: () => (
      <MenuButton iconName="menu" onPress={() => navigation.navigate('SettingsUser', {type})} />
    ),
  });
};

const TabNavigator = ({navigation, route}) => {
  let settingstype;
  
  let screen1 = {};
  let screen2 = {};
  switch (route.name) {
    case 'Walker':
      settingsType = 'Walker';
      screen1.name = 'HomeWalker';
      screen1.component = HomeWalker;
      screen2.name = 'WalkerServices';
      screen2.component = WalkerServices;
      break;
    case 'Client':
      settingsType = 'Client';
      screen1.name = 'HomeClient';
      screen1.component = HomeClient;
      screen2.name = 'ClientDogWalker';
      screen2.component = ClientDogWalker;
      break;
  }

  useEffect(() => {
    setMenu(navigation, settingsType);
  }, [navigation]);

  return (
    <>
      <Tab.Navigator screenOptions={
        {
          headerShown: false,
          tabBarInactiveTintColor: 'black',
          tabBarStyle : {
            backgroundColor: theme.color.primary4, 
          },
          tabBarLabelStyle: {
            fontSize: theme.font.m,
          },
        }
      }>
        <Tab.Screen name={screen1.name} component={screen1.component} options={tabNavUtils.tabBarIcon('home-outline')}/>
        <Tab.Screen name={screen2.name} component={screen2.component}  options={tabNavUtils.tabBarIcon('walk')}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

