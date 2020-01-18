import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import  { AccDecButtons } from '../components/specific/AccDecButtons'
import { GenericHeader } from '../components/base/GenericHeader'


export default function LinksScreen() {
  return (
    <View style={styles.container}>

      <View>
          <GenericHeader/>
      </View>

      <ScrollView>

      </ScrollView>

      <View>
        <AccDecButtons name1='Decline' name2='Submit'/>
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
