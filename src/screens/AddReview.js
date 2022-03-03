import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import UserPresentation from '../components/UserPresentation'
import { firebase } from '@react-native-firebase/firestore'
import { userSession } from '../store/reducers/userSession'
import useAddReview from '../hooks/useAddReview'

const AddReview = ({ navigation, route }) => {
  const form = useAddReview()

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
    firebase.firestore().collection('Reviews').add(getFormResult(form)).then(() => navigation.goBack())
  }

  return (
    <GenericContainer>
      <UserPresentation name={name} image={{ uri: image }} />
      <AirbnbRating onFinishRating={(rating) => setRatings(rating)} defaultRating={5}/>
      <CustomInput placeholder={'Add your review here...'} {...form.review}/>
      <CustomButton title={'Save Review'} borderRadius={15} onPress={ handleAddReview }/>
    </GenericContainer>
  )
}

export default AddReview
