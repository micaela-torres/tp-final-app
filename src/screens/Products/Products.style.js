import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  weapperStyle: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '47%',
    backgroundColor: colors.grey,
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10,
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  title: {
    fontWeight: '700',
    fontFamily: 'CroissantOne',
  },
  price: {
    fontSize: 20,
    fontFamily: 'CroissantOne',
  },
})
