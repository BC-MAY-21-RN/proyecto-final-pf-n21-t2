import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import UserPresentation from '../components/UserPresentation'
import CustomButton from '../components/CustomButton'
import LineSeparator from '../components/LineSeparator'
import UserInfo from '../components/UserInfo'
import theme from '../themes/lights'

const ToHireWalkerSection = ({ navigation, route }) => {
  const { image, name, email, mobile } = route.params
  return (
    <GenericContainer>
      <UserPresentation rating="2" name={name} image={{ uri: image }} />
      <CustomButton marginTop={theme.spacing.xl} title="See reviews" onPress={() => navigation.navigate('Reviews')} />
      <LineSeparator marginVertical={theme.spacing.xxl} />
      <UserInfo mobile={mobile} age="22" email={email} services="1230" />
      <CustomButton marginTop={theme.spacing.xxxl} width={300} title="Take my dog" onPress={() => navigation.navigate('FormTravel')} />
    </GenericContainer>
  )
}

export default ToHireWalkerSection
