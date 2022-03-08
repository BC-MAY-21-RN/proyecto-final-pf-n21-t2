import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import UserPresentation from '../components/UserPresentation'
import { firebase } from '@react-native-firebase/firestore'
import { userSession } from '../store/reducers/userSession'
import useAddReview from '../hooks/useAddReview'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'

const AddReview = ({ navigation, route }) => {
  const form = useAddReview()

  const [ratings, setRatings] = useState(5)
  const [user, setUser] = useState({})

  const getUserNameAndImage = () => {
    fbShortcuts.getCollection('Users').where('useruid', '==', userSession.getState().id).get().then(q => {
      q.forEach(documentSnapshot => {
        const row = documentSnapshot.data()
        row.image = fbShortcuts.getImage(`Users%2F${documentSnapshot.id}%2F${row.imageName}`)
        setUser({
          name: row.username,
          image: row.image
        })
      })
    })
  }

  useEffect(() => {
    getUserNameAndImage()
  }, [])

  const getFormResult = form => {
    return {
      review: form.review.value,
      ratings: ratings,
      useruid: userSession.getState().id,
      walkeruid: route.params.id,
      userImg: user.image,
      userName: user.name
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
