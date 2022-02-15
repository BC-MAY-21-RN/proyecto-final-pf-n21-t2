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

const getScreens = (sn1, sc1, si1, sn2, sc2, si2) => {
  return [{name: sn1, component: sc1, icon: si1}, {name: sn2, component: sc2, icon: si2}];
};

const TabNavigator = ({navigation, route}) => {
  let settingstype;
  let screens = [];
  switch (route.name) {
    case 'Walker':
      settingsType = 'Walker';
      screens = getScreens('HomeWalker', HomeWalker, 'home-outline', 'WalkerServices', WalkerServices, 'walk');
      break;
    case 'Client':
      settingsType = 'Client';
      screens = getScreens('HomeClient', HomeClient, 'home-outline', 'ClientDogWalker', ClientDogWalker, 'walk');
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
        {screens.map(screen => {
          return (
            <Tab.Screen key={screen.name} name={screen.name} component={screen.component}  options={tabNavUtils.tabBarIcon(screen.icon)}/>
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

