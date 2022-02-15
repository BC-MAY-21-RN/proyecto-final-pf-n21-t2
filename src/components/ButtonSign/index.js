import React from 'react'
import CustomButton from '../CustomButton'
import theme from '../../themes/lights'

const ButtonSign = ({ title, onPress, disabled, loading }) => {
  return (
    <CustomButton width={200} marginTop={theme.spacing.xxl} disabled={disabled} loading={loading} title={title} onPress={onPress} />
  )
}

export default ButtonSign
