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

export default class RegisterScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        
            <View style={styles.fnameContainer}>
                <Input
                  name='FirstNameField'
                  placeholder='First Name'       
                />
                <TabBarIcon
                  name={'ios-contact'}
                />
            </View>
            <View style={styles.lnameContainer}>
                <Input
                  name='LastNameField'
                  placeholder='Last Name'       
                />
                <TabBarIcon
                  name={'ios-contact'}
                />
            </View>
            <View style={styles.phoneContainer}>
                <Input
                  name='PhoneField'
                  placeholder='Phone Number'       
                />
                <TabBarIcon
                  name={'ios-call'}
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
              title="Submit" 
              color="#57c6f4"
              onPress={this._submitInAsync} 
              containerStyle={{ marginTop: 50, width: 400, height: 45, }}
            />
       </View>
        );
    }

    _submitInAsync = async () => {
        this.props.navigation.navigate('Main');
      };
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
    fnameContainer: {
        width: 300,
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-between'
      },
      emailContainer: {
        width: 300,
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-between'
      },
    lnameContainer: {
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
    phoneContainer: {
        width: 300,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
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
  