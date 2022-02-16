import React from 'react'
import { View } from 'react-native'
import { CustomInput, InputValidation, InputState } from '../CustomInput'
import ButtonSign from '../ButtonSign'

const GenericSign = ({ children, title, loading, form, setForm, onPress }) => {
  const getInputState = InputState(form, setForm)

  return (
    <View>
      <CustomInput title="Email" state={getInputState('email')} validation={InputValidation.email} />
      <CustomInput type="password" title="Password" state={getInputState('password')} validation={InputValidation.password} />
      {children}
      <ButtonSign loading={loading} disabled={form.disabled} title={title} onPress={() => {
        if (!form.disabled) {
          onPress()
        }
      }} />
    </View>
  )
}

export default GenericSign
