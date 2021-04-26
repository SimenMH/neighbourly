import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
