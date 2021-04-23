import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import moment from 'moment';

import paperBackground from '../../assets/paper-texture01.jpg';

export default function Post (props) {
  const post = props.item;
  const pinColors = ['#FF9797', '#97B4FF', '#DEEE7F', '#D8D8D8', '#85DD84'];
  // const pinColor = pinColors[post.color];
  // Move this logic into create post and save the color in post data
  const pinColor = pinColors[Math.floor(Math.random() * (pinColors.length))]

  const formatTime = () => {
    const time = moment(post.createdAt).fromNow();
    return time
  }

  formatTime()

  return (
    <View style={styles.container}>
      <ImageBackground source={paperBackground} style={styles.background}/>
      <View style={styles.pinContainer}>
        <View style={{ ...styles.pin, backgroundColor: pinColor}}></View>
      </View>
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.timestamp}>{formatTime()}</Text>
          <TouchableOpacity style={{padding: 5}} onPress={() => console.log('Post Settings')}>
            <View style={styles.settings}>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    marginVertical: 8,
    marginHorizontal: 20,
    minHeight: 115,

    shadowColor: "#000",
    elevation: 4,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  pinContainer: {
    position: 'absolute',
    top: 5,
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  pin: {
    height: 15,
    width: 15,
    borderRadius: 50,
    shadowColor: "#000",
    elevation: 3,
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginHorizontal: 25,
    marginBottom: 25,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 7,
    marginBottom: 4,
  },
  timestamp: {
    color: '#878787',
  },
  settings: {
    flex: 1,
    width: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  settingsDot: {
    height: 6,
    width: 6,
    marginLeft: 1,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
});