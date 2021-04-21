import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function BottomBar (props) {
  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <View style={styles.buttonContainer}>
          {/* <View>Home/Main</View>
          <View>Notices</View>
          <View>Events</View>
          <View>Help/Favours</View> */}
        </View>
      </View>
      <View style={styles.addButtonBack}>
        <TouchableOpacity onPress={() => console.log('Add Post')} activeOpacity={0.5}>
          <View style={styles.addButton}>
            <View style={styles.plusIcon}>
              <View style={styles.plusVer}>
                <View style={styles.plusHor} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    flex: 1,
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    height: 70,
    width: '100%',
    bottom: 0,
    backgroundColor: '#489634',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    maxHeight: 70,
    backgroundColor: 'white',
    borderRadius: 50,

    shadowColor: "#000",
    elevation: 8,
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43A82A',
    minWidth: 62,
    maxHeight: 62,
    borderRadius: 50,
  },
  plusIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 18,
    minWidth: 18,
  },
  plusVer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: '100%',
    width: 4,
    shadowColor: "#000",
    elevation: 2,
  },
  plusHor: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 4,
    width: 18,
    shadowColor: "#000",
    elevation: 2,
  },
});