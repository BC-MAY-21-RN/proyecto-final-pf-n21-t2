import React from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import UserPresentation from '../components/UserPresentation'

const AddReview = ({ navigation, route }) => {
  const { image, name } = route.params
  /* const { image } = route.params */

  return (
    <GenericContainer>
      <UserPresentation name={name} image={{ uri: image }} />
      <AirbnbRating/>
      <CustomInput placeholder={'Add your review here...'} />
      <CustomButton title={'Save Review'} borderRadius={15} onPress={() => { alert('New review added :D') } }/>
    </GenericContainer>
  )
}

export default AddReview

/* const styles = StyleSheet.create({
  img: {
    alignSelf: 'center'
  }
})
 */
