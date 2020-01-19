import React, { Component } from 'react';
import { ScrollView, Button, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export class CreateRoomView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Create Room</Text>
      </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    width: width

  }
});