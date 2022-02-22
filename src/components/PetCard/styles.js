import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    display: 'flex',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  }
})

export default styles
