import React, { useState, useEffect } from 'react'
import GenericContainer from '../containers/GenericContainer'
import UserPresentation from '../components/UserPresentation'
import CustomButton from '../components/CustomButton'
import LineSeparator from '../components/LineSeparator'
import UserInfo from '../components/UserInfo'
import theme from '../themes/lights'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'

const getServices = setServices => {
  fbShortcuts.getCollection('Walking').where('walkerId', '==', userSession.getState().id).get()
    .then((querySnapshot) => {
      const services = []
      querySnapshot.forEach((snapshot) => {
        const row = snapshot.data()
        services.push(row)
      })
      setServices(services.length)
    })
}

const ToHireWalkerSection = ({ navigation, route }) => {
  const [services, setServices] = useState(null)
  const { image, name, email, mobile, id, rating } = route.params

  useEffect(() => {
    if (!services) {
      getServices(setServices)
    }
  }, [services])

  return (
    <GenericContainer>
      <UserPresentation rating={rating} name={name} image={{ uri: image }} />
      <CustomButton marginTop={theme.spacing.xl} title="See reviews" onPress={() => navigation.navigate('Reviews', { image, name, id, rating })} />
      <LineSeparator marginVertical={theme.spacing.xxl} />
      <UserInfo mobile={mobile} age="22" email={email} services={services} />
      <CustomButton marginTop={theme.spacing.xxxl} title='Set schedule' width={200} borderRadius={18} color='#fff' textColor={theme.color.primary2} onPress={() => navigation.navigate('FormTravel', { image, id, name })} />
    </GenericContainer>
  )
}

export default ToHireWalkerSection
