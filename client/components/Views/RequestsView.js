import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { ThinHeader } from "../base/ThinHeader";
import { GenericButton } from "../base/GenericButton";
import { RequestsList } from '../specific/RequestsList';
import { CodeModal } from '../specific/CodeModal';

import { d1_contacts, d2_contacts, d3_contacts, d4_contacts }  from '../../constants/Contacts';
const { width, height } = Dimensions.get('window');

export class RequestsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    }
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState({
        isModalVisible: !this.state.isModalVisible
    })
}

  render() {
    return (
      <View>
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
        <View>
            <CodeModal />
          </View>
      </View>
      
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width

  }
});