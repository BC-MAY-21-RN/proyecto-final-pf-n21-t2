import storage from '@react-native-firebase/storage'

const uploadImageToStorage = (path, imageName, petId) => {
  const reference = storage().ref(`/Pets/${petId}/${imageName}`)
  const task = reference.putFile(path)
  return task
}

const fileUpload = (image, petId) => {
  return uploadImageToStorage(image.uri, image.name, petId)
}

export default fileUpload
