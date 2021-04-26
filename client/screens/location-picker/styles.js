import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#428a30',
    height: '100%',
    width: '100%'
  },
  topBar: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#489634',
    maxHeight: 85,
    width: '100%',
    shadowColor: '#000',
    elevation: 3,
    paddingHorizontal: 15,
    paddingTop: 24
  },
  barButton: {
    color: '#FFF0DA',
    fontSize: 22,
    fontWeight: 'bold'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20
  },
  contentText: {
    color: '#FFF0DA',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: -5,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  contentTextWarning: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5
  },
  title: {
    fontFamily: 'PoetsenOne',
    fontSize: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: '#FFF0DA',
    marginBottom: 30
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 175,
    width: 350,
    marginTop: 35,
    backgroundColor: '#ededed',
    shadowColor: 'black',
    elevation: 2,
    overflow: 'hidden',
    borderRadius: 10
  },
  mapButtons: {
    width: 225
  },
  mapButton: {
    borderRadius: 50,
    fontWeight: 'bold'
  }
});
