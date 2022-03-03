import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import UserPresentation from '../components/UserPresentation'
import CustomButton from '../components/CustomButton'
import LineSeparator from '../components/LineSeparator'
import UserInfo from '../components/UserInfo'
import theme from '../themes/lights'

const ToHireWalkerSection = ({ navigation, route }) => {
  const { image, name, email, mobile, id } = route.params
  return (
    <GenericContainer>
      <UserPresentation rating="2" name={name} image={{ uri: image }} />
      <CustomButton marginTop={theme.spacing.xl} title="See reviews" onPress={() => navigation.navigate('Reviews')} />
      <LineSeparator marginVertical={theme.spacing.xxl} />
      <UserInfo mobile={mobile} age="22" email={email} services="1230" />
      <CustomButton marginTop={theme.spacing.xxxl} title='Set schedule' width={200} borderRadius={18} color='#fff' textColor={theme.color.primary2} onPress={() => navigation.navigate('FormTravel', { image, id })} />
      <CustomButton marginTop={theme.spacing.xxxxl} borderRadius={20} color={'white'} textColor={'purple'} title="Add Review" onPress={() => navigation.navigate('AddReview', { image, name })} />
    </GenericContainer>
  )
}

export default ToHireWalkerSection
