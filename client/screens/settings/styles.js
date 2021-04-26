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
    backgroundColor: '#489634',
    maxHeight: 85,
    width: '100%',
    shadowColor: '#000',
    elevation: 3,
    paddingHorizontal: 15,
    paddingTop: 24
  },
  title: {
    fontSize: 36,
    marginLeft: 20,
    marginTop: -5,
    color: '#FFF'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10
  },
  settingsContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',
    marginVertical: 5
  },
  optionButton: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 7,
    paddingVertical: 10
  },
  optionText: {
    fontSize: 16
  },
  lineBreak: {
    borderBottomColor: '#489634',
    borderBottomWidth: 0.5
  }
});
