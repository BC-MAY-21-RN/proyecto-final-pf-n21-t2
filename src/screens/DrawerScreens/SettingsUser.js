import React from 'react';
import CustomButton from '../../components/CustomButton';
import MenuOptions from '../../components/MenuOptions';
import theme from '../../themes/lights';

const SettingsUser = ({navigation, route}) => {
  const buttonStyle = {width: 300, style: {marginBottom: theme.spacing.xxxl}};

  const handleNavigation = (place)=>{
    navigation.navigate(place)
  }

  let settingsContent;
  switch (route.params.type) {
    case 'Client':
      settingsContent =
        <CustomButton leftIconName="walk" title="Pets" {...buttonStyle}
          onPress={() => navigation.navigate('Pets')}
        />
      break;
    case 'Walker':
      settingsContent = null;
      break;
  }

  const person = 'person-circle-outline';
  const help = 'help-circle-outline';

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonStyle.width}>
      <CustomButton leftIconName={person} title="User settings" {...buttonStyle} 
        onPress={()=>{handleNavigation('UserSettingsWalker')}}
      />
      <CustomButton leftIconName={help} title="Help" {...buttonStyle}
        onPress={()=>{handleNavigation('HelpUser')}}
      />
      {settingsContent}
    </MenuOptions>
  );
};

export default SettingsUser;