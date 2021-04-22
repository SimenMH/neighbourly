import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import homeIcon from '../../assets/button-icons/home-icon.png';
import noticeIcon from '../../assets/button-icons/notice-icon.png';
import eventIcon from '../../assets/button-icons/event-icon.png';
import favorIcon from '../../assets/button-icons/favor-icon.png';

export default function BottomBar ({navigateNewPost, changeScreen, screen}) {

  const goTo = (screen) => {
    changeScreen(screen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <View style={styles.buttonContainer}>
          <View style={styles.innerButtonContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => goTo('home')}
              activeOpacity={0.8}
              >
              <Image source={homeIcon} style={{flex: 1, height: '100%', width: '100%', opacity: screen === 'home' ? 1 : 0.5}}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, { marginRight: 30 }]}
              onPress={() => goTo('notice')}
              activeOpacity={0.8}
              >
              <Image source={noticeIcon} style={{flex: 1, height: '100%', width: '100%', opacity: screen === 'notice' ? 1 : 0.5}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.innerButtonContainer}>
          <TouchableOpacity
              style={[styles.iconButton, { marginLeft: 30 }]}
              onPress={() => goTo('event')}
              activeOpacity={0.8}
              >
              <Image source={eventIcon} style={{flex: 1, height: '100%', width: '100%', opacity: screen === 'event' ? 1 : 0.5}}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => goTo('favor')}
              activeOpacity={0.8}
              >
              <Image source={favorIcon} style={{flex: 1, height: '100%', width: '100%', opacity: screen === 'favor' ? 1 : 0.5}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.addButtonBack}>
        <TouchableOpacity onPress={navigateNewPost} activeOpacity={0.5}>
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
    height: 95,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  iconButton: {
    height: 40,
    width: 40,
    // opacity: 0.5
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