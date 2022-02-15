import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    margin: theme.spacing.xl
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xxxl
  }
})

export default styles
