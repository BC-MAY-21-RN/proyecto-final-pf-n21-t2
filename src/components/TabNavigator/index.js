import React, {useEffect} from 'react';
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
        <Tab.Screen name="Home" component={Walker} options={{
          tabBarIcon: ({color, size}) => <Icon name="home-outline" color={color} size={size} />,
        }}/>
        <Tab.Screen name="Services" component={WalkerServices}  options={{
          tabBarIcon: ({color, size}) => <Icon name="walk-outline" color={color} size={size} />
        }}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

