import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const potrait = height > width

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: potrait ? 'center' : 'flex-start',
    paddingTop: potrait ? 0 : 10,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    marginBottom: 60,
    width: '100%',
  },

  imageContainer: {
    alignItems: 'center',
    flex: 0,
    paddingBottom: potrait ? 60 : 10,
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
