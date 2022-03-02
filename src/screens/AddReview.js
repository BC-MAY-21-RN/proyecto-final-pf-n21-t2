import { StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import GenericContainer from '../containers/GenericContainer'
import CustomButton from '../components/CustomButton'
import { AirbnbRating } from 'react-native-ratings'
import RoundImage from '../components/RoundImage'

const AddReview = ({ navigation, route }) => {
  return (
    <GenericContainer>
      <RoundImage align={styles.img} />
      <AirbnbRating/>
      <CustomInput placeholder={'Add your review here...'} />
      <CustomButton title={'Save Review'} borderRadius={15}/>
    </GenericContainer>
  )
}

export default AddReview

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center'
  }
})
