import React from 'react'
import { ActivityIndicator } from 'react-native'
import theme from '../../themes/lights'

const getSize = size => {
  let result
  switch (size) {
    case 'small':
      result = theme.font.m
      break
    case 'medium':
      result = theme.font.xl
      break
    case 'big':
      result = theme.font.xxl
      break
    case 'huge':
      result = theme.font.xxxl
      break
    default:
      result = theme.font.m
  }
  console.log(result)
  return result
}

const LoadingSpinner = ({ size, scale }) => {
  return (
    <ActivityIndicator size={parseInt(getSize(size)) * (parseInt(scale) ?? 1)} color={theme.color.primary1} />
  )
}

export default LoadingSpinner
