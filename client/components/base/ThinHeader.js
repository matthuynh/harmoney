import React from 'react';
import { StyleSheet } from 'react-native';

import { Header, Text } from 'react-native-elements';

export function ThinHeader(props) {
  return (
    <Header
      centerComponent={<Text style={styles.text}>{props.text}</Text>}
        containerStyle={{
          backgroundColor: '#efeff5', height: 25, paddingTop: 0, paddingLeft: 0
        }}
      centerContainerStyle={{flex: 100, alignItems: 'flex-start'}}
      />
  );
}

const styles = StyleSheet.create({
  content: {
    top: 0
  },
  text: {
    color: "#57c6f4",
    fontWeight: "bold",
    fontSize: 20
  }
});
