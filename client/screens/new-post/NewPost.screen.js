import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { styles } from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from 'moment';

import { createPost } from '../../services/ApiService.service';

import backIcon from '../../assets/button-icons/back-icon-alt.png';
import identifierIcon from '../../assets/button-icons/identifier-icon.png';
import chatIcon from '../../assets/button-icons/chat-icon.png';
import timerIcon from '../../assets/button-icons/timer-icon.png';
import calendarIcon from '../../assets/button-icons/calendar-icon.png';
import checkIcon from '../../assets/button-icons/check-icon.png';

export default function NewPost({ navigation, route }) {
  const [text, setText] = useState('');
  const [lineBreaks, setLineBreaks] = useState(0);
  const [identity, setIdentity] = useState('');
  const [editIdentity, setEditIdentity] = useState(false);
  const [allowMessages, setAllowMessages] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDate, setEventDate] = useState(new Date());

  const { type } = route.params;

  useEffect(() => {
    // Get the number of linebreaks and update the lineBreaks state
    const lb = text.split('\n');
    setLineBreaks(lb.length - 1);
  }, [text]);

  const postIt = async () => {
    const { refreshPosts } = route.params;
    if (text) {
      try {
        let position = await AsyncStorage.getItem('@neighbourly_location');
        position = JSON.parse(position);

        let post = {
          content: text,
          latitude: position.latitude,
          longitude: position.longitude,
          color: Math.floor(Math.random() * 5), // 5 is the amount of different pin colors
          identifier: identity.trim(),
          allowMessages: allowMessages
        };

        if (type === 'event') post.eventDate = eventDate;

        const newPost = await createPost(post, type);

        let authored = await AsyncStorage.getItem('@neighbourly_authored');
        if (!authored) authored = '[]';
        authored = JSON.stringify([...JSON.parse(authored), newPost._id]);
        await AsyncStorage.setItem('@neighbourly_authored', authored);
        authored = await AsyncStorage.getItem('@neighbourly_authored');

        navigation.goBack();
        refreshPosts();
      } catch (err) {
        Alert.alert('Something went wrong', 'Please try again later');
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
          <Image source={backIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={postIt} activeOpacity={0.5}>
          <Text style={styles.barButton}>Post</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showCalendar} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <CalendarPicker
              selectedStartDate={selectedDate}
              startFromMonday={true}
              minDate={new Date()}
              onDateChange={date => setSelectedDate(date)}
              height={325}
              width={350}
              textStyle={{ fontWeight: 'bold' }}
            />
            <View style={styles.calendarButtonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedDate(eventDate);
                  setShowCalendar(false);
                }}
              >
                <Text style={styles.calendarButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEventDate(selectedDate);
                  setShowCalendar(false);
                }}
              >
                <Text style={styles.calendarButton}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.inputView}>
        <TextInput
          style={styles.input}
          multiline
          scrollEnabled={true}
          maxLength={345 - lineBreaks * 23} // For each linebreak, decrease the max length by 23
          onChangeText={setText}
          placeholder={'Share some thoughts or ideas to the neighbours around you.'}
        />
      </ScrollView>
      {!editIdentity ? (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionsButton}
            activeOpacity={0.8}
            onPress={() => setEditIdentity(true)}
          >
            <View style={styles.iconContainer}>
              <Image source={identifierIcon} style={styles.buttonIcons} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionsButton}
            onPress={() => setAllowMessages(!allowMessages)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Image
                source={chatIcon}
                style={{
                  ...styles.buttonIcons,
                  opacity: allowMessages ? 0.8 : 0.2
                }}
              />
            </View>
          </TouchableOpacity>

          {type === 'event' ? (
            <TouchableOpacity
              style={styles.optionsButton}
              activeOpacity={0.8}
              onPress={() => setShowCalendar(!showCalendar)}
            >
              <View style={styles.iconContainer}>
                <Image source={calendarIcon} style={styles.buttonIcons} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.optionsButton} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <Image source={timerIcon} style={styles.buttonIcons} />
              </View>
            </TouchableOpacity>
          )}
          {type === 'event' && <Text style={styles.dateText}>{moment(eventDate).format('D MMM')}</Text>}
        </View>
      ) : (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionsButton}
            onPress={() => setEditIdentity(false)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Image source={checkIcon} style={{ ...styles.buttonIcons, opacity: 0.6 }} />
            </View>
          </TouchableOpacity>

          <View style={styles.identityInputContainer}>
            <TextInput
              style={styles.identityInput}
              maxLength={16}
              placeholder={'e.g. John, 221B'}
              onChangeText={val => setIdentity(val)}
              defaultValue={identity}
            />
          </View>
        </View>
      )}
    </View>
  );
}
