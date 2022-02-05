import React from 'react';
import MenuOptions from '../../components/MenuOptions';
import MenuOptionButton from '../../components/MenuOptionButton';

const SettingsClient = ({navigation}) => {
  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonWidth}>
      <MenuOptionButton iconName="person-circle-outline" title="User settings" />
      <MenuOptionButton IconName="help-circle-outline" title="Help" />
    </MenuOptions>
  );
};

export default SettingsClient;