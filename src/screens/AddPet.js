import React, { useState, useEffect } from 'react'
import GenericContainer from '../containers/GenericContainer'
import { CustomInput } from '../components/CustomInput'
import ImageInput from '../components/ImageInput'
import theme from '../themes/lights'
import CustomButton from '../components/CustomButton'
import fileUpload from '../assets/controllers/FileUpload'

const AddPet = () => {
  const [value, setValue] = useState()
  const [ok, setOk] = useState()

  const handleUpload = () => {
    if (value) {
      fileUpload(value)
    }
  }

  return (
    <GenericContainer scroll={true}>
      <CustomInput title={'Pet Name'}/>
      <CustomInput title={'Age'} />
      <CustomInput title={'Weight'} />
      <CustomInput title={'Height'} />
      <CustomInput height={100} title={'Special Cares'} />
      <ImageInput title="imagen" {...{ value, setValue, setOk }} />
      <CustomButton width={150} marginTop={theme.spacing.xl} title={'ADD'} onPress={handleUpload} />
    </GenericContainer>
  )
}

export default AddPet
