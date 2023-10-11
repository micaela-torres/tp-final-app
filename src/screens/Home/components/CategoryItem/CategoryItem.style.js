import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    marginVertical: 7,
    height: 100,
    borderRadius: 25,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingLeft: 20,
  },
  text: {
    fontFamily: 'CroissantOne',
    fontSize: 18,
  },
})
