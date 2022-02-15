import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: theme.font.m,
    color: theme.color.secondary2
  },
  hightlight: {
    color: 'blue'
  }
})

export default styles
