import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateInterest } from '../../services/ApiService.service';
import moment from 'moment'; // DayJS date-fns

import paperBackground from '../../assets/paper-texture01.jpg';
import plusIcon from '../../assets/button-icons/plus-icon.png';
import checkIcon from '../../assets/button-icons/check-icon-alt.png';
import noticePin from '../../assets/notice-pin.png';

export default function Post(props) {
  const post = props.post;
  const pinColors = ['#FF9797', '#97B4FF', '#DEEE7F', '#D8D8D8', '#85DD84'];
  const pinColor = pinColors[post.color];
  const [interested, setInterested] = useState('');
  const [fetchingInterest, setFetchingInterest] = useState(true);

  const formatTime = () => {
    const time = moment(post.createdAt).fromNow();
    return time;
  };

  const toggleInterest = async () => {
    setFetchingInterest(true);
    await updateInterest(post._id, !interested);

    let interestedEvents = await AsyncStorage.getItem('@neighbourly_interested');
    if (interestedEvents) interestedEvents = JSON.parse(interestedEvents);
    else interestedEvents = [];

    if (!interested) {
      interestedEvents.push(post._id);
      post.interest += 1;
    } else {
      interestedEvents = interestedEvents.filter(id => id !== post._id);
      post.interest -= 1;
    }
    await AsyncStorage.setItem('@neighbourly_interested', JSON.stringify(interestedEvents));
    setInterested(!interested);

    setFetchingInterest(false);
  };

  const fetchInterest = async () => {
    setFetchingInterest(true);
    let interestedEvents = await AsyncStorage.getItem('@neighbourly_interested');
    if (interestedEvents) {
      interestedEvents = JSON.parse(interestedEvents);
      if (interestedEvents.includes(post._id)) setInterested(true);
    }
    setFetchingInterest(false);
  };

  useEffect(() => {
    if (props.type === 'event') {
      fetchInterest();
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={paperBackground} style={styles.background} />
      <View style={{ minHeight: 115 }}>
        <View style={styles.pinContainer}>
          {props.type === 'notice' ? (
            <Image source={noticePin} style={styles.noticePin} />
          ) : (
            <View style={{ ...styles.pin, backgroundColor: pinColor }}></View>
          )}
        </View>
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.timestamp}>{formatTime()}</Text>
            <TouchableOpacity style={{ padding: 5 }} onPress={() => console.log('Post Settings')}>
              <View style={styles.settings}>
                <View style={styles.settingsDot}></View>
                <View style={styles.settingsDot}></View>
                <View style={styles.settingsDot}></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>{post.content}</Text>
        </View>
        {post.identifier ? <Text style={styles.identifier}>-{post.identifier}</Text> : null}
      </View>
      {props.type === 'event' && (
        <View style={styles.eventInfo}>
          <Text style={styles.eventText}>Date: {moment(post.eventDate).format('D MMM YYYY')}</Text>
          <View style={styles.interestContainer}>
            <Text style={styles.eventText}>{post.interest} people are interested</Text>
            <View>
              <TouchableOpacity
                style={styles.interestButton}
                activeOpacity={0.4}
                onPress={toggleInterest}
                disabled={fetchingInterest}
              >
                <View style={styles.iconContainer}>
                  {fetchingInterest ? (
                    <ActivityIndicator size={15} color={'white'} />
                  ) : (
                    <Image source={interested ? checkIcon : plusIcon} style={styles.buttonIcon} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 15,
    width: 15
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
  }
});
