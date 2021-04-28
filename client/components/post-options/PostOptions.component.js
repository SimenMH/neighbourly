import React from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function PostOptions(props) {
  const renderOption = (text, onPressHandler) => {
    return (
      <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
        <Text style={styles.optionButton}>{text}</Text>
        <View style={styles.lineBreak}></View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={props.postOptions.visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.optionsContainer}>
          {props.postOptions.author ? (
            <View>
              {props.postOptions.type === 'favor' && renderOption('Resolved', props.handleResolveFavor)}
              {renderOption('Delete', props.handleDeletePost)}
            </View>
          ) : (
            <View>
              {props.postOptions.allowMessages && renderOption('Send Message')}
              {renderOption('Hide this post', props.hidePost)}
              {props.postOptions.type === 'notice' && renderOption('Mark as not important')}
              {renderOption('Report')}
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
