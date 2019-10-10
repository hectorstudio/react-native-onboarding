import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },

  leftContainer: {
    alignItems: 'center',
    flexGrow: 1,
    width: 100,
  },

  centerContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },

  rightContainer: {
    alignItems: 'center',
    flexGrow: 1,
    width: 100,
  },

  dots: {
    flexShrink: 0,
  },

  colorLight: {
    color: 'white',
  },

  colorDark: {
    color: 'black',
  },
})

export default styles
