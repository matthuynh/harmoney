import React, { Component } from 'react';
import { GenericHeader } from '../components/base/GenericHeader'
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import { Card, Header, Text,  } from 'react-native-elements';
import { ClickableIcon } from '../components/base/ClickableIcon';
import { InputTextField } from '../components/base/InputTextField';
import { ThinHeader } from '../components/base/ThinHeader';
import { GenericButton } from '../components/base/GenericButton';
import { ShareList } from '../components/specific/ShareList';
import { rooms }  from '../constants/Contacts';

export default class CreateRoomScreen extends React.Component {

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
                rightComponent={this.subheader("Room Details")}
                containerStyle={{
                    backgroundColor: '#57c6f4', height: 40, paddingTop: 0
                  }}
                leftContainerStyle={{flex: 1, alignItems: 'flex-start'}}
                rightContainerStyle={{flex: 6.5, alignItems: 'flex-start'}}
                placement='center'
            />
  
           <SafeAreaView style={styles.container}>
            <View>
              <InputTextField label="Name"/>
            </View> 
            <View>
              <InputTextField label="Amount" text="$0.00" />
              <Card title="Room Code">
                <Text>8f9d</Text>
              </Card>
            </View>
            <ThinHeader text="Room Members" />

            <ScrollView style={styles.members} bounces={false}>
              <ShareList list={rooms}/>
            </ScrollView>
           </SafeAreaView>
  
           
          <GenericButton color="red" text="Confirm Room"/>
  
        </View>
      </View>
  
    );
  }

  
}

CreateRoomScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  }
});
