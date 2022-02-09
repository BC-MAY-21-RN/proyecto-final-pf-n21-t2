import React from 'react';
import CustomButton from '../../components/CustomButton';
import MenuOptions from '../../components/MenuOptions';
import theme from '../../themes/lights';

const SettingsWalker = ({navigation}) => {
  const buttonWidth = 300;
  const bottomMargin = {marginBottom: theme.spacing.xxxl};

  const handleWalker = () => {
    navigation.navigate('UserSettingsWalker');
  };

  const handleHelpWalker  = () => {
    navigation.navigate('HelpWalker');
  }

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonWidth}>
      <CustomButton leftIconName="person-circle-outline" style={bottomMargin} title="User settings" width={buttonWidth} 
        onPress={handleWalker}
      />
      <CustomButton leftIconName="help-circle-outline" style={bottomMargin} title="Help" width={buttonWidth} 
        onPress={handleHelpWalker}
      />
    </MenuOptions>
  );
};

export default SettingsWalker;