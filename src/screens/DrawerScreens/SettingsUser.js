import React from 'react';
import CustomButton from '../../components/CustomButton';
import MenuOptions from '../../components/MenuOptions';
import theme from '../../themes/lights';

const SettingsUser = ({navigation, route}) => {
  const buttonStyle = {width: 300, marginBottom: theme.spacing.xxxl};

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

  const icons = {
    person: 'person-circle-outline',
    help: 'help-circle-outline',
    about: 'people-outline'
  }

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonStyle.width}>
      <CustomButton leftIconName={icons.person} title="User settings" {...buttonStyle} 
        onPress={()=>{handleNavigation('UserSettingsWalker')}}
      />
      <CustomButton leftIconName={icons.help} title="Help" {...buttonStyle}
        onPress={()=>{handleNavigation('HelpUser')}}
      />
      <CustomButton leftIconName={icons.about} title="About Us" {...buttonStyle}
        onPress={()=>{handleNavigation('AboutUs')}}
      />
      {settingsContent}
    </MenuOptions>
  );
};

export default SettingsUser;