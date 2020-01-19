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

<<<<<<< HEAD
=======
      <View>
        <AccDecButtons name1='Decline' name2='Submit'/>
      </View>
>>>>>>> ab28cb353e47931727c2a03bba4dd5c385541f07

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
