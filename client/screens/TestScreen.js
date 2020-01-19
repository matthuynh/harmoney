import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import GenericButton from '../components/GenericButton'
import GenericHeader from '../components/GenericHeader'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class TestScreen extends React.Component {
    render() {
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Test Screen</Text>
        </View>
      );
    }
  }