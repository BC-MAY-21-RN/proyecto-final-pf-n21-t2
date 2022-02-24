import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  iconContainer: {
    marginRight: theme.spacing.xl,
    marginLeft: theme.spacing.xxl
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    padding: theme.spacing.xl,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14,
    justifyContent: 'center'
  },
  textColor: {
    color: theme.color.secondary1
  },
  text: {
    fontSize: theme.font.xl,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  disabled: {
    opacity: 0.5
  },
  icon: {
    fontSize: theme.font.xxl
  },
  iconWithText: {
    marginRight: theme.spacing.xl
  }
})

export default styles
