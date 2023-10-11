import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    paddingHorizontal: 15,
    marginBottom: 200,
  },
  img:{
    width: 300,
    height: 100,
    marginTop: 20,
    marginLeft:10,
    marginRight: 10,
    marginBottom: 20,
    alignSelf:'center',
  },
  fondo:{
    backgroundColor: colors.white,
  },
})
