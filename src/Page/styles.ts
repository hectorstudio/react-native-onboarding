import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')
const portrait = height > width

export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: portrait ? 'center' : 'flex-start',
    // paddingTop: portrait ? 0 : 10,
  },

  backgroundImage: {
    left: 0,
    position: 'absolute',
    top: 0,
  },

  contentPage: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: portrait ? 'center' : 'flex-start',
    paddingTop: 60,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },

  bodyPage: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 60,
  },

  imageContainer: {
    alignItems: 'center',
    flex: 0,
    paddingBottom: portrait ? 60 : 10,
    width: '100%',
  },

  padding: {
    paddingHorizontal: 10,
  },

  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },

  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    paddingBottom: 15,
    textAlign: 'center',
  },

  titleLight: {
    color: '#000',
  },
})

export default styles
