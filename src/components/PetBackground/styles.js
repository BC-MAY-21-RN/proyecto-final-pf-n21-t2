import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    opacity: 0.7
  },
  coverBottomTitle: {
    flex: 1,
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold'
  },
  titleContainer: {
    position: 'absolute',
    left: 10,
    bottom: 0
  }
})

export default styles
