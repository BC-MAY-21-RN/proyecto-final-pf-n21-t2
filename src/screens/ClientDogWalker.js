import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import UserPresentation from '../components/UserPresentation'
import CustomButton from '../components/CustomButton'
import LineSeparator from '../components/LineSeparator'
import UserInfo from '../components/UserInfo'
import theme from '../themes/lights'

const ClientDogWalker = () => {
  return (
    <GenericContainer>
      <UserPresentation rating="2" image={require('../assets/images/image_loading.gif')} />
      <CustomButton marginTop={theme.spacing.xl} title="See reviews" onPress={() => console.log('to reviews screen')} />
      <LineSeparator marginVertical={theme.spacing.xxl} />
      <UserInfo address="Molusco #139" age="22" email="hmaldonado0@ucol.mx" services="1230" />
      <CustomButton marginTop={theme.spacing.xxxl} width={300} title="Take my dog" onPress={() => console.log('take my dog')} />
    </GenericContainer>
  )
}

export default ClientDogWalker
