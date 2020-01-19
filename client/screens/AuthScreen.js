import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';

  

export default class AuthScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <Button 
          title="Sign in!" 
          onPress={this._signInAsync} 
          containerStyle={{ marginTop: 50, width: 400, height: 45, }}
        />
        <Button 
          title="Don't have an account? Register." 
          onPress={this._registerAsync} 
          containerStyle={{ marginTop: 50, width: 400, height: 45, }}
        />
      </View>
    );
  }
  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  _registerAsync = async () => {

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  