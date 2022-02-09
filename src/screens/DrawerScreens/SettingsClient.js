import React from 'react';
import MenuOptions from '../../components/MenuOptions';
import MenuOptionButton from '../../components/MenuOptionButton';

const SettingsClient = ({navigation}) => {
  const buttonWidth = 300;
  const bottomMargin = {marginBottom: theme.spacing.xxxl};

  const handleClient = () => {
    navigation.navigate('UserSettingsClient');
  };

  const handleHelpClient  = () => {
    navigation.navigate('HelpClient');
  }

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonWidth}>
      <CustomButton leftIconName="person-circle-outline" style={bottomMargin} title="User settings" width={buttonWidth} 
        onPress={handleClient}
      />
      <CustomButton leftIconName="help-circle-outline" style={bottomMargin} title="Help" width={buttonWidth} 
        onPress={handleHelpClient}
      />
    </MenuOptions>
  );
};

export default SettingsClient;