import React from 'react';
import { StyleSheet } from 'react-native';

import { Input } from 'react-native-elements';

export function InputTextField(props) {
  return (
    <Input 
      style={styles.content}
      label={props.label}
      placeholder={props.text}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    top: 0
  },
});
