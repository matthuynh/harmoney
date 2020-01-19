import * as WebBrowser from 'expo-web-browser';
<<<<<<< HEAD
import React from 'react';
import GenericButton from '../components/GenericButton'
import GenericHeader from '../components/GenericHeader'

=======
import React, { Component } from 'react';
import { GenericButton } from '../components/base/GenericButton'
import { GenericHeader } from '../components/base/GenericHeader'
>>>>>>> ab28cb353e47931727c2a03bba4dd5c385541f07
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
} from 'react-native';


<<<<<<< HEAD

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

=======
import { MonoText } from '../components/StyledText';
import { InputTextField } from '../components/base/InputTextField';
import { ContactList } from '../components/base/ContactList';
import { CodeModal } from '../components/specific/CodeModal';



export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
        isModalVisible: !this.state.isModalVisible
    })
}

  render() {
    return (
      <View style={styles.container}>
        <View>
            <GenericHeader/>
        </View>
        
        <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer}>
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
  
          <View style={styles.getStartedContainer}>
            <InputTextField label="Label" text="Text"/>
            <CodeModal />
          </View>
          <ContactList />
        </ScrollView>

        <View style={styles.tabButton}>
          {
            <GenericButton/>
          }
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

>>>>>>> ab28cb353e47931727c2a03bba4dd5c385541f07
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
  contentContainer: {
    paddingTop: 30,
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
