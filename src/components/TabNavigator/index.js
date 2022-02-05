import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Walker from '../../screens/Walker';
import WalkerServices from '../../screens/WalkerServices';
import MenuButton from '../MenuButton';
import theme from '../../themes/lights';
import tabNavUtils from '../../assets/controllers/tabNavigationUtils';

const Tab = createBottomTabNavigator();

const setMenu = navigation => {
  navigation.setOptions({
    headerLeft: () => (
      <MenuButton iconName="menu" onPress={() => navigation.navigate('SettingsWalker')} />
    ),
  });
};

const TabNavigator = ({navigation}) => {
  useEffect(() => {
    setMenu(navigation);
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
        <Tab.Screen name="Home" component={Walker} options={tabNavUtils.tabBarIcon('home-outline')}/>
        <Tab.Screen name="Services" component={WalkerServices}  options={tabNavUtils.tabBarIcon('walk')}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

