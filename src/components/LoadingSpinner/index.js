import React from 'react'
import { ActivityIndicator } from 'react-native'
import theme from '../../themes/lights'

const getSize = size => {
  let result
  switch (size) {
    case 'tiny':
      result = theme.font.xs
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
  return result
}

const LoadingSpinner = ({ size, scale, color }) => {
  color = color ?? theme.color.primary1
  return (
    <ActivityIndicator size={parseInt(getSize(size)) * (scale ?? 1)} color={color} />
  )
}

export default LoadingSpinner
