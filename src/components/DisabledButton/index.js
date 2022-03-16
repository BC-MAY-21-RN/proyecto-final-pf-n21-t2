import React from 'react'
import CustomButton from '../CustomButton'

const DisabledButton = (props) => {
  return <CustomButton {...props} ok={false} />
}

export default DisabledButton
