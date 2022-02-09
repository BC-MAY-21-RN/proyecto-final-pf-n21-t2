import React from 'react';
import CustomButton from '../../components/CustomButton';
import MenuOptions from '../../components/MenuOptions';
import theme from '../../themes/lights';

const SettingsUser = ({navigation, route}) => {
  const buttonWidth = 300;
  const bottomMargin = {marginBottom: theme.spacing.xxxl};

  const handleNavigation = (place)=>{
    navigation.navigate(place)
  }

  let settingsContent;
  switch (route.params.type) {
    case 'Client':
      settingsContent =
        <CustomButton leftIconName="help-circle-outline" style={bottomMargin} title="Pets" width={buttonWidth} 
          onPress={() => console.log('to pets screen')}
        />
      break;
    case 'Walker':
      settingsContent = null;
      break;
  }

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonWidth}>
      <CustomButton leftIconName="person-circle-outline" style={bottomMargin} title="User settings" width={buttonWidth} 
        onPress={()=>{handleNavigation('UserSettingsWalker')}}
      />
      <CustomButton leftIconName="help-circle-outline" style={bottomMargin} title="Help" width={buttonWidth} 
        onPress={()=>{handleNavigation('HelpWalker')}}
      />
      {settingsContent}
    </MenuOptions>
  );
};

export default SettingsUser;