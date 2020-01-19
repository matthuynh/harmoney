import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { InputTextField } from './InputTextField';
import { AccDecButtons } from '../specific/AccDecButtons';


export function ModalContent(props) {

  handleSub = () => {
    props.onSubmit();
    props.onExit();
  }

  return (
    <View style={styles.content}>
      <InputTextField placeholder="ex. 8d9f" label="Enter Room Code" />
      <AccDecButtons onHandle1={props.onExit} onHandle2={handleSub} name1="Exit" name2="Submit" style={{ }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexGrow: 0.125,
    position: 'relative',
    overflow: 'hidden',
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