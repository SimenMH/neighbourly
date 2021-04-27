import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 20,
    minHeight: 115,
    shadowColor: '#000',
    elevation: 4
  },
  background: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3
  },
  pinContainer: {
    position: 'absolute',
    top: 5,
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  pin: {
    height: 15,
    width: 15,
    borderRadius: 50,
    shadowColor: '#000',
    elevation: 3
  },
  noticePin: {
    height: 18,
    width: 18
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginHorizontal: 25,
    marginBottom: 25
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 7,
    marginBottom: 4
  },
  timestamp: {
    color: '#878787'
  },
  settings: {
    flex: 1,
    width: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  settingsDot: {
    height: 6,
    width: 6,
    marginLeft: 1,
    borderRadius: 50,
    backgroundColor: '#878787'
  },
  identifier: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    color: '#878787'
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 30,
    paddingHorizontal: 10,
    borderTopColor: 'rgba(0, 0, 0, 0.4)',
    borderTopWidth: 1
  },
  eventText: {
    fontWeight: 'bold'
  },
  interestContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  interestButton: {
    width: 20,
    height: 20,
    backgroundColor: '#66bb00',
    shadowColor: '#000',
    elevation: 1,
    borderRadius: 5,
    marginLeft: 5
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    width: '60%',
    height: '60%'
  },
  resolved: {
    position: 'absolute',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(186, 164, 122, 0.15)'
  }
});
