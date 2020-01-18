import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { InputTextField } from './InputTextField';

export function ModalContent(props) {

  const handleSub = () => {
    console.log("hi");
    props.onPress();
  }

  return (
    <View style={styles.content}>
      <InputTextField placeholder="ex. 8d9f" label="Enter Room Code" />
      <Button testID={'close-button'} onPress={props.onPress} title="Close" />
      <Button testID={'submit-button'} onPress={handleSub} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});