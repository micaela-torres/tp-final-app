import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft:20,
    marginRight:20,
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
})
