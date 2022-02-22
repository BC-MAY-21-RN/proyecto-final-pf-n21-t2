import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 150,
    alignSelf: 'center'
  },
  title: {
    fontSize: theme.font.m,
    color: theme.color.secondary2
  },
  edit: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})

export default styles
