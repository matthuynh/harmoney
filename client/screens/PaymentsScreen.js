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
import { ThinHeader } from "../components/base/ThinHeader";
import { RequestsList } from '../components/specific/RequestsList';

import { ClickableIcon } from '../components/base/ClickableIcon';
import { d1_contacts, d2_contacts, d3_contacts, d4_contacts }  from '../constants/Contacts';


export default class PaymentsScreen extends React.Component {

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
                rightComponent={this.subheader("Transfer History")}
                containerStyle={{
                    backgroundColor: '#57c6f4', height: 40, paddingTop: 0
                  }}
                leftContainerStyle={{flex: 1, alignItems: 'flex-start'}}
                rightContainerStyle={{flex: 6.5, alignItems: 'flex-start'}}
                placement='center'
            />

        <ScrollView style={styles.container} bounces={false}>
          <ThinHeader text="January 18th, 2020" />
          <RequestsList list={d1_contacts}/>
          <ThinHeader text="January 14th, 2020" />
          <RequestsList list={d2_contacts}/>
          <ThinHeader text="January 4th, 2020" />
          <RequestsList list={d3_contacts}/>
          <ThinHeader text="December 24th, 2019" />
          <RequestsList list={d4_contacts}/>
        </ScrollView>

  
        </View>
      </View>
  
    );
  }

  
}

PaymentsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
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
