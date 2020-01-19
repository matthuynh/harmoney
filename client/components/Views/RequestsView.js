import React, { Component } from 'react';
import { SafeAreaView, Button, Text, StyleSheet, Dimensions } from "react-native";

const { width, height  } = Dimensions.get('window');


export class RequestsView extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Requests View</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    width: width
  }
});