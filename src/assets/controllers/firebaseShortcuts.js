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
  if (document) {
    return getCollection(collection).doc(document)
  }
  return getCollection(collection).doc()
}

const getImage = (filePath) => {
  const domain = 'https://firebasestorage.googleapis.com/v0/b/take-my-dog.appspot.com/o/'
  const tail = '?alt=media&token=816106a6-653f-48d5-8b73-7b1f04e392de'
  return `${domain}${filePath}${tail}`
}

const handleThen = (req, callback) => {
  return req.catch(e => {
    Alert.alert('Error', e)
  }).then(r => {
    if (callback) {
      callback(r)
    }
  })
}

const add = (collection, id, newValue, callback) => {
  if (id) {
    handleThen(getDoc(collection, id).set(newValue), callback)
  } else {
    handleThen(getDoc(collection).set(newValue), callback)
  }
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
  push,
  getImage
}

export default fbShortcuts
