import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.xl,
    marginHorizontal: theme.spacing.xxxl,
    flex: 1,
    display: 'flex'
  },
  enfasisContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    alignSelf: 'center'
  }
})

export default styles
