import React, { useState } from 'react'
import GenericContainer from '../containers/GenericContainer'
import { CustomInput } from '../components/CustomInput'
import ImageInput from '../components/ImageInput'
import theme from '../themes/lights'
import CustomButton from '../components/CustomButton'

const AddPet = () => {
  const [value, setValue] = useState()
  const [ok, setOk] = useState()

  return (
    <GenericContainer scroll={true}>
      <CustomInput title={'Pet Name'}/>
      <CustomInput title={'Age'} />
      <CustomInput title={'Weight'} />
      <CustomInput title={'Height'} />
      <CustomInput height={100} title={'Special Cares'} />
      <ImageInput title="imagen" {...{ value, setValue, setOk }} />
      <CustomButton width={150} marginTop={theme.spacing.xl} title={'ADD'} />
    </GenericContainer>
  )
}

export default AddPet
