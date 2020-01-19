import React, { Component } from 'react';
import { GenericHeader } from '../components/base/GenericHeader'
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  Image
} from 'react-native';
import { Header, Text,  } from 'react-native-elements';
import { ClickableIcon } from '../components/base/ClickableIcon';
import { Contact } from '../components/base/Contact';

import { AccDecButtons } from '../components/specific/AccDecButtons';

export default class DoneScreen extends React.Component {

  subheader = (text) => {
    return (
    <View style={styles.mini}>
      <Text style={styles.text}>{text}</Text>
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <GenericHeader/>
        </View>
  
        <View style={styles.container}>
            <Header
                leftComponent={<ClickableIcon name="keyboard-backspace" type="material" color="white" onPress={this.handleIconClick}/>}
                rightComponent={this.subheader("Request Confirmation")}
                containerStyle={{
                    backgroundColor: '#57c6f4', height: 40, paddingTop: 0
                  }}
                leftContainerStyle={{flex: 1, alignItems: 'flex-start'}}
                rightContainerStyle={{flex: 6.5, alignItems: 'flex-start'}}
                placement='center'
            />

            <Text style={styles.h1}>Done!</Text>


            <Text style={styles.subtitle}>Your request has been completed.</Text>
           
  
        </View>
      </View>
  
    );
  }

  
}

DoneScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66ff66'
  },
  members: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },

  mini: {
    flex: 1
  },
  text: {
    paddingTop: 10,
    fontSize: 14,
    color: '#ffff'  
  },
  h1 : {
    fontWeight: 'bold',
    paddingTop: 150,
    fontSize: 75,
    textAlign: 'center'
  },
  subtitle : {
    paddingTop: 60,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
