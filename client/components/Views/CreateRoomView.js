import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { ThinHeader } from "../base/ThinHeader";
import { GenericButton } from "../base/GenericButton";
import { ContactList } from '../base/ContactList';
import { a_contacts, g_contacts, k_contacts, m_contacts, r_contacts }  from '../../constants/Contacts';
import { AddContactList } from '../specific/AddContactList';


const { width, height } = Dimensions.get('window');

export class CreateRoomView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container} bounces={false}>
          <ThinHeader text="A" />
          <AddContactList list={a_contacts}/>
          
          <ThinHeader text="G" />
          <AddContactList list={g_contacts}/>
          <ThinHeader text="K" />
          <AddContactList list={k_contacts}/>
          <ThinHeader text="M" />
          <AddContactList list={m_contacts}/>
          <ThinHeader text="R" />
          <AddContactList list={r_contacts}/>
        </ScrollView>
        <GenericButton color="red" text="Create Room"/>
      </View>
      
      
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