import React from 'react'
import { View } from 'react-native'
import ImageLogo from '../ImageLogo'
import ToNextSectionText from '../ToNextSectionText'

const SignWithLogo = ({ navigation, children, footer }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageLogo flex={3} />
      {children}
      <ToNextSectionText navigation={navigation} text={footer[0]} nextSection={{ label: footer[1], section: footer[2] }} />
    </View>
  )
}

export default SignWithLogo
