import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import GenericButton from '../components/GenericButton'
import GenericHeader from '../components/GenericHeader'

import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
} from 'react-native';



export default class HomeScreen extends React.Component {
  render() {


  return (
    <View style={styles.container}>
      <View>
          <GenericHeader/>
      </View>
      
      <ScrollView>
            
      </ScrollView>

      <View style={styles.tabButton}>
        {
          
          <GenericButton 
          onPress={() => this.props.navigation.navigate('Test')}
          />
          
        }
      </View>
    </View>
  );
}
}
HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabButton: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: 'rgba(192, 192, 192, 0.1)'
  },
  buttonStyle: {
    marginTop: 20,
    padding: 20,
  },
});
