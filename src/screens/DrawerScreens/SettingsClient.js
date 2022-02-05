import React from 'react';
import CustomButton from '../../components/CustomButton';
import MenuOptions from '../../components/MenuOptions';
import theme from '../../themes/lights';

const SettingsClient = ({navigation}) => {
  const buttonWidth = 300;
  const bottomMargin = {marginBottom: theme.spacing.xxxl};

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonWidth}>
      <CustomButton leftIconName="person-circle-outline" style={bottomMargin} title="User settings" width={buttonWidth} />
      <CustomButton leftIconName="help-circle-outline" style={bottomMargin} title="Help" width={buttonWidth} />
    </MenuOptions>
  );
};

export default SettingsClient;