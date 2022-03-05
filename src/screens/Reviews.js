import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserPresentation from '../components/UserPresentation'
import CustomRatings from '../components/CustomRatings'
import GenericFlatList from '../components/GenericFlatList'
// import fbShortcuts from '../assets/controllers/firebaseShortcuts'
// import firestore from '@react-native-firebase/firestore'
import EnfasisText from '../components/EnfasisText'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
// import { userSession } from '../store/reducers/userSession'

const ListReviews = ({ userImg, userName, review, ratings }) => {
  return (
        <View style={styles.containerCard}>

            <Image source={ { uri: userImg } } style={styles.img}/>

            <View style={styles.contarinerInfo}>
              <View style={styles.texts}>
                  <Text style={styles.color}>{userName}</Text>
                  <CustomRatings rating={ratings}/>
              </View>
              <Text style={styles.color}>{review}</Text>
            </View>
        </View>
  )
}

const Reviews = ({ route: { params: { image, name, id } } }) => {
  const renderItem = ({ item }) => {
    return <ListReviews {...item}/>
  }
  // GetAverage(ratings)

  const mTop = { marginTop: 10 }

  const [reviews, setReviews] = useState(null)

  const getReviews = () => {
    const result = []
    fbShortcuts.getCollection('Reviews').where('walkeruid', '==', id).get()
      .then(q => {
        q.forEach(documentSnapshot => {
          const row = documentSnapshot.data()
          result.push(row)
        })
        result.sort((a, b) => b.ratings - a.ratings)
        setReviews(result)
      })
  }

  // const GetAverage = () => {
  //   const ValueRatings = []
  //   fbShortcuts.getCollection('Reviews').where('walkeruid', '==', id).get().then(q => {
  //     q.forEach(documentSnapshot => {
  //       const row = documentSnapshot.data()
  //       row.image = fbShortcuts.getImage(`Users%2F${documentSnapshot.id}%2F${row.imageName}`)
  //       result.push({
  //         review: row.review,
  //         ratings: row.ratings,

  //       })
  //     })
  //     setReviews(result)
  //   })
  // }

  useEffect(() => {
    getReviews()
  }, [])

  return (

    <View style={styles.container}>

        <UserPresentation rating="4" name={name} image={{ uri: image }} />

        {reviews ? <GenericFlatList DATA={reviews} renderItem={renderItem} styles={mTop} /> : <EnfasisText text="There are no reviews yet"/> }

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
