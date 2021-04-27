import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAA47A',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1
  },
  banner: {
    backgroundColor: '#347025',
    width: '100%',
    paddingVertical: 1.5,
    borderBottomColor: 'rgba(27, 56, 20, 0.2)',
    borderBottomWidth: 2
  },
  bannerText: {
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 1,
    textAlign: 'center'
  }
});
