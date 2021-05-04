import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import backIcon from '../../assets/button-icons/back-icon.png';
import rightArrowIcon from '../../assets/button-icons/right-arrow-icon.png';

export default function Settings({ navigation }) {
  const resetHiddenPosts = async () => {
    try {
      await AsyncStorage.removeItem('@neighbourly_hidden');
      Alert.alert('Hidden posts reset', 'Hidden posts were successfully reset');
    } catch (err) {
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };
  const renderOption = (text, onPressHandler) => {
    return (
      <TouchableOpacity
        testID={text}
        onPress={onPressHandler}
        activeOpacity={0.8}
      >
        <View style={styles.optionButton}>
          <Text style={styles.optionText}>{text}</Text>
          <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Image source={backIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.settingsContainer}>
          {renderOption('Change Location', () =>
            navigation.navigate('LocationPicker')
          )}
          <View style={styles.lineBreak}></View>
          {renderOption('Reset Hidden Posts', resetHiddenPosts)}
          <View style={styles.lineBreak}></View>
          {renderOption('Chat', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('Notification Settings', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('Preferences', () => {})}
        </View>
        <View style={styles.settingsContainer}>
          {renderOption('FAQ', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('About Us', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('Contact Us', () => {})}
        </View>
        <View style={styles.settingsContainer}>
          {renderOption('Community Guidelines', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('Privacy Policy', () => {})}
          <View style={styles.lineBreak}></View>
          {renderOption('Terms of Service', () => {})}
        </View>
      </View>
    </View>
  );
}
