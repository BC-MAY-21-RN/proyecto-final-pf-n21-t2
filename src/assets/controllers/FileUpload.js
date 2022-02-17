import { Alert } from 'react-native'
import storage from '@react-native-firebase/storage'

// const FileUpload = () => {
//   this.state = {
//     uploadValue: 0,
//     picture: null
//   }
//   this.handleUpload = this.handleUpload.bind(this)
// }

const uploadImageToStorage = (path, imageName) => {
  const reference = storage().ref(`/Pets/${imageName}`)
  const task = reference.putFile(path)

  task.then(() => {
    console.log('Image uploaded to the bucket!')
    Alert.alert('Genial', 'Imagen subida correctamente')
  }).catch((e) => console.log('uploading image error => ', e))
}

const fileUpload = (image) => {
  uploadImageToStorage(image.uri, image.name)

  // const file = event.target.file[0]
  // const storageRef = firebase.storage().ref(`/Pets/${file.name}`)
  // const task = storageRef.put(file)

  // task.on('state_chenged', snapshot => {
  //   const percentage = (snapshot.bytesTransfered / snapshot.totalbytes) * 100
  //   this.setState({
  //     uploadValue: percentage
  //   })
  // }, error => {
  //   console.log(error.message)
  // }, () => {
  //   this.setState({
  //     uploadValue: 100,
  //     picture: task.snapshot.downloadURL
  //   })
  // })
}

export default fileUpload
