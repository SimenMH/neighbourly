import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#428a30',
    height: '100%',
    width: '100%'
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
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
  inputView: {
    marginHorizontal: 22,
    marginTop: 10,
    maxHeight: '70%'
  },
  input: {
    color: '#FFF0DA',
    textDecorationLine: 'underline',
    fontSize: 22,
    textAlignVertical: 'top',
    height: '100%'
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingBottom: 15
  },
  optionsButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#FFF0DA',
    marginHorizontal: 7
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcons: {
    height: '60%',
    width: '60%',
    opacity: 0.8
  },
  identityInputContainer: {
    flex: 1,
    padding: 10,
    maxWidth: 150,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  identityInput: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  calendarContainer: {
    marginTop: '50%',
    backgroundColor: '#FFFF',
    borderRadius: 5
  },
  calendarButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 35,
    marginTop: 10,
    marginHorizontal: 15
  },
  calendarButton: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  dateText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF0DA',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 1,
      width: 1
    },
    textShadowRadius: 1,
    marginBottom: 5
  }
});
