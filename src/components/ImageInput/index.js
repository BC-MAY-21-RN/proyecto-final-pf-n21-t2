import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import RoundImage from '../RoundImage'
import CustomButton from '../CustomButton'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Dialog from 'react-native-dialog'

const getImage = async (setImage, type, setValue, setOk, setVisible) => {
  setVisible(false)
  const options = {
    mediaType: 'photo'
  }
  let result
  if (type === 'camera') {
    result = await launchCamera(options, () => {})
  } else if (type === 'gallery') {
    result = await launchImageLibrary(options, () => {})
  }

  const imageFile = {
    uri: result.assets[0].uri,
    name: result.assets[0].fileName,
    type: result.assets[0].type
  }
  setImage(imageFile.uri)
  setValue(imageFile)
  setOk(true)
}

const ImageInput = ({ title, value, setValue, setOk }) => {
  const defaultValue = value ?? null
  const [image, setImage] = useState(defaultValue)
  const [visible, setVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
        <Dialog.Title>¿How would you like to upload the image?</Dialog.Title>
        <Dialog.Button label="Gallery" onPress={() => getImage(setImage, 'gallery', setValue, setOk, setVisible)} />
        <Dialog.Button label="Open camera" onPress={() => getImage(setImage, 'camera', setValue, setOk, setVisible)} />
      </Dialog.Container>
      <Text style={styles.title}>{title}</Text>
      <RoundImage size={100} source={{ uri: image }} />
      <CustomButton style={styles.edit} leftIconName="create-outline" onPress={() => setVisible(true)} />
    </View>
  )
}

export default ImageInput
