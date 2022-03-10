import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import UserPresentation from '../components/UserPresentation'
import { firebase } from '@react-native-firebase/firestore'
import { userSession } from '../store/reducers/userSession'
import useAddReview from '../hooks/useAddReview'
import theme from '../themes/lights'

export const resetNavigation = navigation => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Client', params: { useruid: userSession.getState().id } }]
  })
}

const AddReview = ({ navigation, route }) => {
  const form = useAddReview()
  const [loading, setLoading] = useState(false)
  const [ratings, setRatings] = useState(0)

  const getFormResult = form => {
    return {
      review: form.review.value,
      ratings: ratings,
      useruid: userSession.getState().id,
      walkeruid: route.params.id
    }
  }

  const { image, name } = route.params
  const handleAddReview = () => {
    setLoading(true)
    firebase.firestore().collection('Reviews').add(getFormResult(form)).then(() => {
      setLoading(false)
      resetNavigation(navigation)
    })
  }
  const handleCancel = () => {
    resetNavigation(navigation)
  }

  return (
    <GenericContainer scroll>
      <UserPresentation name={name} image={{ uri: image }} />
      <AirbnbRating onFinishRating={(rating) => setRatings(rating)} defaultRating={5}/>
      <CustomInput placeholder={'Add your review here...'} {...form.review}/>
      <CustomButton title={'Save Review'} width={150} loading={loading} borderRadius={15} onPress={ handleAddReview }/>
      <CustomButton title={'Cancel'} width={100} marginTop={theme.spacing.m} borderRadius={15} onPress={ handleCancel }/>
    </GenericContainer>
  )
}

export default AddReview
