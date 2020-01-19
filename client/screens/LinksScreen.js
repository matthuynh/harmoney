import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import  { AccDecButtons } from '../components/specific/AccDecButtons'
import { GenericHeader } from '../components/base/GenericHeader'
import { HomeScrollView } from '../components/specific/HomeScrollView';


export default function LinksScreen() {
  return (
    <View style={styles.container}>

      <View>
          <GenericHeader/>
      </View>

      <HomeScrollView />

      

    </View>

  );
}

LinksScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  mini: {
    flex: 1
  }
});
