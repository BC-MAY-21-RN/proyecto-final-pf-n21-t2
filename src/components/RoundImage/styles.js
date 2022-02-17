import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  tinyLogo: {
    borderRadius: 50,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: theme.color.primary3,
    borderRadius: 100,
    overflow: 'hidden'
  }
})

export default styles
