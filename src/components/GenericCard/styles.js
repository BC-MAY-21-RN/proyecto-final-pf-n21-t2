import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  CardBox: {
    left: 15,
    borderColor: theme.color.primary1,
    height: 100,
    width: 320,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row'
  },
  Img: {
    borderRadius: 100,
    width: 85,
    height: 85,
    top: 5,
    left: 5
  },
  Data: {
    flexDirection: 'column',
    left: 30,
    paddingVertical: 10
  },
  Tittle: {
    color: 'lightgrey'
  },
  Owner: {
    fontWeight: 'bold'
  },
  Space: {
    paddingVertical: 10
  }

})

export default styles
