import React, { Component } from 'react';
import { HomeScrollView } from '../components/Views/HomeScrollView'
import { GenericHeader } from '../components/base/GenericHeader'
import { GenericButton } from '../components/base/GenericButton'
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor (props) {
    super(props);
  }
  render(){ 
  return (
    <View style={styles.container}>
      <View>
          <GenericHeader/>
      </View>
      <HomeScrollView onPress={() => this.props.navigation.navigate('CreateRoom')}/>

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
    backgroundColor: '#fff'
  },

  mini: {
    flex: 1
  }
});
