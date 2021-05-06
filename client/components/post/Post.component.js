import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateInterest } from '../../services/ApiService.service';
import moment from 'moment'; // Alternatives: DayJS or date-fns

import paperBackground from '../../assets/paper-texture01.jpg';
import plusIcon from '../../assets/button-icons/plus-icon.png';
import checkIcon from '../../assets/button-icons/check-icon-alt.png';
import noticePin from '../../assets/notice-pin-alt.png';
import favorResolved from '../../assets/favor-resolved.png';

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
    try {
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
      // Always stringify before saving to storage. AsyncStorage expects a string
      await AsyncStorage.setItem('@neighbourly_interested', JSON.stringify(interestedEvents));

      setInterested(!interested);
    } catch (err) {
      console.error(err);
    }

    setFetchingInterest(false);
  };

  const fetchInterest = async () => {
    setFetchingInterest(true);
    try {
      let interestedEvents = await AsyncStorage.getItem('@neighbourly_interested');
      if (interestedEvents) {
        interestedEvents = JSON.parse(interestedEvents);
        if (interestedEvents.includes(post._id)) setInterested(true);
      }
    } catch (err) {
      console.error(err);
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
        {props.type === 'favor' && post.resolved && (
          <View style={styles.resolved}>
            <Image
              source={favorResolved}
              style={{ height: 100, width: 100, opacity: 0.4 }}
            />
          </View>
        )}
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
            <TouchableOpacity
              testID='options'
              style={{ padding: 5 }}
              onPress={() =>
                props.handlePostOptions(
                  post._id,
                  props.type,
                  post.allowMessages
                )
              }
            >
              <View style={styles.settings}>
                <View style={styles.settingsDot}></View>
                <View style={styles.settingsDot}></View>
                <View style={styles.settingsDot}></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>{post.content}</Text>
        </View>
        {post.identifier ? (
          <Text style={styles.identifier}>-{post.identifier}</Text>
        ) : null}
      </View>
      {props.type === 'event' && (
        <View style={styles.eventInfo}>
          <Text style={styles.eventText}>
            Date: {moment(post.eventDate).format('D MMM YYYY')}
          </Text>
          <View style={styles.interestContainer}>
            <Text style={styles.eventText}>
              {post.interest} people are interested
            </Text>
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
                    <Image
                      source={interested ? checkIcon : plusIcon}
                      style={styles.buttonIcon}
                    />
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
