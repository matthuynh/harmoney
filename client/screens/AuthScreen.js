import React from 'react';
import {
    AsyncStorage,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { Input } from 'react-native-elements';


  

export default class AuthScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
        <View style={styles.emailContainer}>
            <Input
              name='EmailField'
              placeholder='Email'       
            />
            <TabBarIcon
              name={'ios-mail'}
            />
        </View>

        <View style={styles.passwordContainer}>
            <Input
              name='PasswordField'
              placeholder='Password'
              secureTextEntry={true}
            />
            <TabBarIcon
              name={'ios-lock'}       
            />
        </View>

        <Button 
          title="Sign in!" 
          color="#57c6f4"
          onPress={this._signInAsync} 
          containerStyle={{ marginTop: 50, width: 400, height: 45, }}
        />
        <View style={styles.regButton}>

            <Button 
              title="Don't have an account? Register." 
              color="#57c6f4"
              onPress={this._registerAsync} 
              containerStyle={{ marginTop: 50, width: 400, height: 45, }}

            />
        </View>

      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  _registerAsync = async () => {
    this.props.navigation.navigate('Reg')
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: -100
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    emailContainer: {
      width: 300,
      alignItems: 'center',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      justifyContent: 'space-between'
    },
    passwordContainer: {
      width: 300,
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    
  welcomeContainer: {
    alignItems: 'center',
    marginTop: -200,
    marginBottom: 50,
  },
  welcomeImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
  