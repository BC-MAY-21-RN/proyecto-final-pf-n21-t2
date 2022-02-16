import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  title: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
    paddingLeft: theme.spacing.xs
  },
  input: {
    borderWidth: 2,
    borderColor: theme.color.secondary2,
    paddingLeft: theme.spacing.m
  },
  inputError: {
    color: theme.color.danger
  }
})

export default styles
