import {StyleSheet} from 'react-native';
import theme from '../../themes/lights';

const styles = StyleSheet.create({
  CardBox: {
    borderColor: theme.color.primary1,
    height: 100,
    width: 100,
  },
  Img: {
    borderRadius: 10,
    width: 30,
    height: 30,
  },
  TittleBold: {
    fontWeight: "bold",
    fontSize: 15,
  }

  
})

export default styles;