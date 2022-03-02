import React from 'react'
import { View } from 'react-native'
import CustomInput from '../CustomInput'
import ButtonSign from '../ButtonSign'

const GenericSign = ({ children, title, email, password, submit, onPress }) => {
  return (
    <View>
      <CustomInput title="Email" placeholder="example: client1@gmail.com" {...email} />
      <CustomInput type="password" title="Password" placeholder="***********" {...password} secureTextEntry={true} />
      {children}
      <ButtonSign {...submit} title={title} onPress={() => {
        if (submit.ok) {
          onPress()
        }
      }} />
    </View>
  )
}

export default GenericSign
