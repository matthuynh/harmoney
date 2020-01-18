import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import  { AccDecButtons } from '../components/AccDecButtons'
import GenericHeader from '../components/GenericHeader'


export default function LinksScreen() {
  return (
    <View style={styles.container}>

      <View>
          <GenericHeader/>
      </View>

      <ScrollView>

      </ScrollView>

      <View>
        <AccDecButtons name1='Syubmit' name2='Decline'/>
      </View>

    </View>

  );
}

LinksScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
