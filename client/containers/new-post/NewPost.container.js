import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { addPost } from '../../components/post-list/mock-data';

export default function NewPost ({navigation}) {
  const [text, setText] = useState('')
  const [lineBreaks, setLineBreaks] = useState(0)

  useEffect(() => {
    // Get the number of linebreaks and update the lineBreaks state
    const lb = text.split('\n');
    setLineBreaks(lb.length-1);
  }, [text])

  const postIt = () => {
    // Replace this with api service
    addPost(text);
    setText('');
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')} activeOpacity={0.5}>
          <Text style={styles.barButton}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.barButton} onPress={postIt}>Post</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.inputView}>
        <TextInput
          multiline
          scrollEnabled={true}
          maxLength={345 - (lineBreaks * 23)} // For each linebreak, decrease the max length by 23
          style={styles.input}
          onChangeText={setText}
          placeholder={'Share your thoughts and experiences with the people around you'}
        />
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#428a30',
    height: '100%',
    width: '100%',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#489634',
    maxHeight: 85,
    width: '100%',
    shadowColor: "#000",
    elevation: 3,
    paddingHorizontal: 15,
    paddingTop: 24,
  },
  barButton: {
    color: '#FFF0DA',
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputView: {
    marginHorizontal: 22,
    marginTop: 10,
    maxHeight: '70%'
  },
  input: {
    // marginHorizontal: 20,
    // marginTop: 10,
    color: '#FFF0DA',
    textDecorationLine: 'underline',
    fontSize: 22,
    textAlignVertical: 'top',
    height: '100%'
  }
})