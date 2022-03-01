import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import UserPresentation from '../components/UserPresentation'
import CustomButton from '../components/CustomButton'
import LineSeparator from '../components/LineSeparator'
import UserInfo from '../components/UserInfo'
import theme from '../themes/lights'

const ToHireWalkerSection = ({ navigation, route }) => {
  return (
    <GenericContainer>
      <UserPresentation rating="2" name={route.params.name} image={{ uri: route.params.image }} />
      <CustomButton marginTop={theme.spacing.xl} title="See reviews" onPress={() => navigation.navigate('Reviews')} />
      <LineSeparator marginVertical={theme.spacing.xxl} />
      <UserInfo address="Molusco #139" age="22" email="hmaldonado0@ucol.mx" services="1230" />
      <CustomButton marginTop={theme.spacing.xxxl} width={300} title="Take my dog" onPress={() => navigation.navigate('FormTravel')} />
    </GenericContainer>
  )
}

export default ToHireWalkerSection
