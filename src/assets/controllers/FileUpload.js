import { Alert } from 'react-native'
import storage from '@react-native-firebase/storage'
import { userSession } from '../../store/reducers/userSession'

const uploadImageToStorage = (path, imageName) => {
  const reference = storage().ref(`/Pets/${userSession.getState().id}/${imageName}`)
  const task = reference.putFile(path)

  return task
}

const fileUpload = (image) => {
  return uploadImageToStorage(image.uri, image.name)
}

export default fileUpload
