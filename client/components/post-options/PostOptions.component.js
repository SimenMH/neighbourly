import React from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function PostOptions(props) {
  return (
    <Modal visible={props.postOptions.visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.optionsContainer}>
          {props.postOptions.author ? (
            <View>
              {props.postOptions.type === 'favor' && (
                <TouchableOpacity onPress={props.handleResolveFavor} activeOpacity={0.6}>
                  <Text style={styles.optionButton}>Resolved</Text>
                  <View style={styles.lineBreak}></View>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={props.handleDeletePost} activeOpacity={0.6}>
                <Text style={styles.optionButton}>Delete</Text>
                <View style={styles.lineBreak}></View>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {props.postOptions.allowMessages && (
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.optionButton}>Send message</Text>
                  <View style={styles.lineBreak}></View>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={props.hidePost} activeOpacity={0.6}>
                <Text style={styles.optionButton}>Hide this post</Text>
                <View style={styles.lineBreak}></View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.optionButton}>Report</Text>
                <View style={styles.lineBreak}></View>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.cancelContainer}>
            <TouchableOpacity
              onPress={() => props.setPostOptions({ ...props.postOptions, visible: false })}
              activeOpacity={0.6}
            >
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
