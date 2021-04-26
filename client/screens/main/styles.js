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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  optionsContainer: {
    width: '65%',
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  optionButton: {
    fontSize: 20
  },
  lineBreak: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 5
  },
  cancelContainer: {
    flex: 0,
    alignItems: 'flex-end',
    marginTop: 15,
    marginBottom: -7
  },
  cancelText: {
    fontSize: 14
  }
});
