import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import UserPresentation from '../components/UserPresentation'
import { firebase } from '@react-native-firebase/firestore'
import { userSession } from '../store/reducers/userSession'
import useAddReview from '../hooks/useAddReview'
import theme from '../themes/lights'
import LoadingSpinner from '../components/LoadingSpinner'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'

export const resetNavigation = navigation => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Client', params: { useruid: userSession.getState().id } }]
  })
}

const getClientInfo = setClientInfo => {
  fbShortcuts.getUserByUID(userSession.getState().id, data => {
    data.imagePath = fbShortcuts.getImage(`Users%2F${data.useruid}%2F${data.imageName}`)
    setClientInfo(data)
  })
}

const AddReview = ({ navigation, route }) => {
  const form = useAddReview()
  const [loading, setLoading] = useState(false)
  const [ratings, setRatings] = useState(0)
  const [clientInfo, setClientInfo] = useState(null)

  useEffect(() => {
    if (!clientInfo) {
      getClientInfo(setClientInfo)
    }
  }, [clientInfo])

  const getFormResult = form => {
    return {
      review: form.review.value,
      ratings: ratings,
      useruid: userSession.getState().id,
      walkeruid: route.params.walkerId,
      userImg: clientInfo?.imagePath,
      userName: clientInfo?.username
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
      {clientInfo
        ? (
        <>
          <UserPresentation name={name} image={{ uri: image }} />
      <AirbnbRating onFinishRating={(rating) => setRatings(rating)} defaultRating={5}/>
      <CustomInput placeholder={'Add your review here...'} {...form.review}/>
      <CustomButton title={'Save Review'} width={150} loading={loading} borderRadius={15} onPress={ handleAddReview }/>
      <CustomButton title={'Cancel'} width={100} marginTop={theme.spacing.m} borderRadius={15} onPress={ handleCancel }/>
        </>
          )
        : <LoadingSpinner size="huge" scale={2} />}
    </GenericContainer>
  )
}

export default AddReview
