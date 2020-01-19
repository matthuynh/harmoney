import React, { Component } from 'react';
import { GenericHeader } from '../components/base/GenericHeader'
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import { Card, Header, Text } from 'react-native-elements';
import { ClickableIcon } from '../components/base/ClickableIcon';
import { Contact } from '../components/base/Contact';

import { InvitedList } from '../components/specific/InvitedList';
import { rooms } from '../constants/Contacts';

export default class RoomConfirmedScreen extends React.Component {

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
                rightComponent={this.subheader("Room Created!")}
                containerStyle={{
                    backgroundColor: '#57c6f4', height: 40, paddingTop: 0
                  }}
                leftContainerStyle={{flex: 1, alignItems: 'flex-start'}}
                rightContainerStyle={{flex: 6.5, alignItems: 'flex-start'}}
                placement='center'
            />

            <Text style={styles.h1}>Waiting ...</Text>

            <Text style={styles.subtitle}>Currently waiting for everyone to accept/decline!</Text>
             
            <Card title="Invited Users">
              <ScrollView style={styles.members} bounces={false}>
                  <InvitedList list={rooms}/>
              </ScrollView>

            </Card>
        </View>
      </View>
  
    );
  }

  
}

RoomConfirmedScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  members: {
    height: 250,
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
    paddingTop: 70,
    fontSize: 60,
    textAlign: 'center'
  },
  subtitle : {
    paddingTop: 50,
    fontSize: 30,
    textAlign: 'center'
  }
});
