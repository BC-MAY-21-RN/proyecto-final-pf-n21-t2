import storage from '@react-native-firebase/storage'

const uploadImageToStorage = (target, path, imageName, imageId) => {
  const reference = storage().ref(`${target}/${imageId}/${imageName}`)
  const task = reference.putFile(path)
  return task
}

const fileUpload = (target, image, imageId) => {
  return uploadImageToStorage(target, image.uri, image.name, imageId)
}

export default fileUpload
