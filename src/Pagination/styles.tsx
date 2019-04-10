import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },

  buttonLeft: {
    alignItems: 'flex-start',
    flexShrink: 1,
    width: 200,
  },

  buttonRight: {
    alignItems: 'flex-end',
    flexShrink: 1,
    width: 200,
  },

  dots: {
    flexShrink: 0,
  },
})

export default styles
