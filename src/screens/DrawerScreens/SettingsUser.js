import React from 'react'
import CustomButton from '../../components/CustomButton'
import MenuOptions from '../../components/MenuOptions'
import theme from '../../themes/lights'

const SettingsUser = ({ navigation, route }) => {
  const buttonStyle = { width: 300, marginBottom: theme.spacing.xxxl }

  const handleNavigation = (place) => {
    navigation.navigate(place)
  }

  let settingsContent
  switch (route.params.type) {
    case 'Client':
      settingsContent =
        <CustomButton leftIconName="walk" title="Pets" {...buttonStyle}
          onPress={() => navigation.navigate('Pets')}
        />
      break
    case 'Walker':
      settingsContent = null
      break
  }

  const person = 'person-circle-outline'
  const help = 'help-circle-outline'
  const about = 'people-outline'
  const disOk = { ok: false }

  return (
    <MenuOptions navigation={navigation} buttonWidth={buttonStyle.width}>

      <CustomButton leftIconName={person} {...{ disOk }} title="User settings" {...buttonStyle}
        onPress={() => { handleNavigation('UserSettingsWalker') }}
      />
      <CustomButton leftIconName={help} {...{ disOk }} title="Help" {...buttonStyle}
        onPress={() => { handleNavigation('HelpUser') }}
      />
      <CustomButton leftIconName={about} title="About Us" {...buttonStyle}
        onPress={() => { handleNavigation('AboutUs') }}
      />
      <CustomButton leftIconName={about} title="Test Position" {...buttonStyle}
        onPress={() => { handleNavigation('TestPosition') }}
      />
      {settingsContent}
    </MenuOptions>
  )
}

export default SettingsUser
