import { Alert } from 'react-native'
import { firebase } from '@react-native-firebase/firestore'

const getUserByUID = (uid, callback) => {
  firebase.firestore().collection('Users').where('useruid', '==', uid).get().then((querySnapshot) => {
    querySnapshot.forEach(snapshot => {
      const data = snapshot.data()
      callback(data)
    })
  })
}

const getCollection = collection => {
  return firebase.firestore().collection(collection)
}

const getDoc = (collection, document) => {
  return getCollection(collection).doc(document)
}

const handleThen = (req, callback) => {
  return req.catch(e => {
    Alert.alert('Error', e)
  }).then(r => {
    if (callback) {
      callback()
    }
  })
}

const add = (collection, id, newValue, callback) => {
  handleThen(getDoc(collection, id).set(newValue), callback)
}

const push = (collection, id, newValue, callback) => {
  handleThen(getDoc(collection, id).push(newValue), callback)
}

const updateDoc = (collection, doc, newValue, callback) => {
  handleThen(getDoc(collection, doc).update(newValue), callback)
}

const fbShortcuts = {
  getUserByUID,
  updateDoc,
  add,
  getCollection,
  push
}

export default fbShortcuts
