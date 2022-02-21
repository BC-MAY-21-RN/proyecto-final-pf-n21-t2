import React from 'react'
import CustomButton from '../CustomButton'
import theme from '../../themes/lights'

const ButtonSign = ({ title, onPress, ok, loading }) => {
  ok = ok ?? true
  return (
    <CustomButton width={200} marginTop={theme.spacing.xxl} ok={ok} loading={loading} title={title} onPress={onPress} />
  )
}

export default ButtonSign
