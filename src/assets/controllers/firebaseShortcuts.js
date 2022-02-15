import {firebase} from '@react-native-firebase/firestore';

const getUserByUID = (uid, callback) => {
  firebase.firestore().collection('Users').where('useruid', '==', uid).get().then((querySnapshot) => {
    querySnapshot.forEach(snapshot => {
      let data = snapshot.data();
      callback(data);
    });
  });
};

const add = (collection, id, newValue, callback) => {
  firebase.firestore().collection(collection).doc(id).set(newValue).catch(e => {
    console.error(e);
  }).then(r => {
    if (callback) {
      callback();
    }
  });
};

const updateDoc = (collection, doc, newValue, callback) => {
  firebase.firestore().collection(collection).doc(doc).update(newValue).catch(e => {
    console.error(e);
  }).then(r => {
    if (callback) {
      callback();
    }
  });
};

const getCollection = collection => {
  return firebase.firestore().collection(collection);
};

const fbShortcuts = {
  getUserByUID,
  updateDoc,
  add,
  getCollection,
};

export default fbShortcuts;