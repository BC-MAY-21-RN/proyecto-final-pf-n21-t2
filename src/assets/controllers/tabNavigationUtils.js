import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const tabNavUtils = {
  tabBarIcon: (name) => {
    return {
      tabBarIcon: ({color, size}) => <Icon name={name} color={color} size={size} />
    };
  },
};

export default tabNavUtils;
