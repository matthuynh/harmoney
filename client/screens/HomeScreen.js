import React from 'react';
import { HomeScrollView } from '../components/Views/HomeScrollView'
import { GenericHeader } from '../components/base/GenericHeader'
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
          <GenericHeader/>
      </View>
      <HomeScrollView />
    </View>

  );
}

HomeScreen.navigationOptions = {
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
