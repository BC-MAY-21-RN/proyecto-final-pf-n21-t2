import React from 'react'
import CustomButton from '../components/CustomButton'
import GenericContainer from '../containers/GenericContainer'
import WalkerSelected from '../components/WalkerSelected'
import { CustomInput } from '../components/CustomInput'
import theme from '../themes/lights'

const ClientDateForm = () => {
  return (
    <GenericContainer>
      <WalkerSelected name="tizoc" image={require('../assets/images/image_loading.gif')} />
      <CustomInput title="Start datetime" />
      <CustomInput title="End datetime" />
      <CustomButton marginTop={theme.spacing.xxxl} title='Finish' loading={false} width={200}/>
    </GenericContainer>
  )
}

export default ClientDateForm
