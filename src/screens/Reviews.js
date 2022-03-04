import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserPresentation from '../components/UserPresentation'
import CustomRatings from '../components/CustomRatings'
import GenericFlatList from '../components/GenericFlatList'
// import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import firestore from '@react-native-firebase/firestore'

const DATA = [
  { id: '1', imgW: 'https://pbs.twimg.com/media/Ew-KeLXXAAAWn01.jpg', name: 'Tizoc Chavez ', rating: 5, desc: 'Great Job!' },
  { id: '2', imgW: 'https://pbs.twimg.com/profile_images/1450931329382719496/sZ-Z4HCx_400x400.jpg', name: 'Marcelo', rating: 1, desc: 'He lost my dog!' },
  { id: '3', imgW: 'https://img.brut.media/thumbnail/keanu-reeves-una-vida-de-tragedia-y-triunfo-f6eaff55-f741-4c21-9efa-31d7c1bd348b-square.jpg', name: 'Keanu Reeves', rating: 4, desc: 'Nice Dude' },
  { id: '4', imgW: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a8/a832a1c3adf9857ab3a421841b24e36a20b4e8ad_full.jpg', name: 'Obama Wero', rating: 1, desc: 'My dog arrived hurt ' },
  { id: '5', imgW: 'https://www.quever.news/u/fotografias/m/2021/12/24/f608x342-20849_50572_13.jpg', name: 'Monica', rating: 5, desc: 'My dog is very Happy :D!!' }
]

const ListReviews = ({ imgW, name, rating, desc, id }) => {
  return (
        <View style={styles.containerCard}>

            <Image source={ { uri: imgW } } style={styles.img}/>

            <View style={styles.contarinerInfo}>
              <View style={styles.texts}>
                  <Text style={styles.color}>{name}</Text>
                  <CustomRatings rating={rating}/>
              </View>
              <Text style={styles.color}>{desc}</Text>
            </View>
        </View>
  )
}

const Reviews = ({ route: { params: { image, name } } }) => {
  const renderItem = ({ item }) => {
    return <ListReviews {...item}/>
  }
  // GetAverage(ratings)

  const mTop = { marginTop: 10 }

  const [reviews, setReviews] = useState([])

  const getReviews = () => {
    firestore().collection('Reviews').onSnapshot(querySnapshot => {
      const review = []
      querySnapshot.forEach(documentSnapshot => {
        review.push({
          ...documentSnapshot.data()
        })
      })
      console.log(review)
      setReviews(review)
    })
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (

    <View style={styles.container}>

        <UserPresentation rating="4" name={name} image={{ uri: image }} />

        <GenericFlatList DATA={DATA} renderItem={renderItem} styles={mTop}/>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flex: 1
  },
  listContainer: {
    marginTop: 20
  },
  containerCard: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: 300,
    flexDirection: 'row',
    marginBottom: 30
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 5
  },
  texts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  contarinerInfo: {
    flexDirection: 'column',
    marginLeft: 20,
    width: 200
  },
  color: {
    color: 'black'
  }
})

export default Reviews
