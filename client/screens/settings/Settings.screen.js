import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

import backIcon from '../../assets/button-icons/back-icon.png';
import rightArrowIcon from '../../assets/button-icons/right-arrow-icon.png';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
          <Image source={backIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.settingsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('LocationPicker')} activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Change Location</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Reset Hidden Posts</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Chat</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Notification Settings</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Preferences</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>FAQ</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>About Us</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Contact Us</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Community Guidelines</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Privacy Policy</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.lineBreak}></View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.optionButton}>
              <Text style={styles.optionText}>Terms of Service</Text>
              <Image source={rightArrowIcon} style={{ height: 15, width: 25 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
