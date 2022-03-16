import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  spinnerContainer: {
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: theme.font.m,
    color: theme.color.secondary2
  },
  rowData: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  bold: {
    fontWeight: 'bold'
  },
  separator: {
    marginBottom: theme.spacing.xl
  }
})

export default styles
