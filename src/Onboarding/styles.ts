import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,.1)',
  },

  paginationContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
})

export default styles
