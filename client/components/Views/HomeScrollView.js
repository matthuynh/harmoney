import React, { Component } from 'react';
import { View, SafeAreaView, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import { CreateRoomView } from '../Views/CreateRoomView';
import { RequestsView } from '../Views/RequestsView';
import { ClickableIcon } from '../base/ClickableIcon';

const { width, height } = Dimensions.get('window');


export class HomeScrollView extends Component {

  constructor (props) {
    super(props);
  }

  handleIconClick = () => {

  }
  
  subheader = (text) => {
    return (
    <View style={styles.mini}>
      <Text style={styles.text}>{text}</Text>
    </View>);
  }

  render () {
    return (
      <View style={styles.container}>
          <Header
              leftComponent={<ClickableIcon name="keyboard-backspace" type="material" color="white" onPress={this.handleIconClick}/>}
              centerComponent={this.subheader("Create Room")}
              rightComponent={this.subheader("View Rooms")}
              containerStyle={{
                  backgroundColor: '#57c6f4', height: 40, paddingTop: 0
                }}
              leftContainerStyle={{flex: 1, alignItems: 'flex-start'}}
              centerContainerStyle={{flex: 2, alignItems: 'flex-start'}}
              rightContainerStyle={{flex: 3, alignItems: 'center'}}
              placement='center'
          />

         <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} horizontal={true} pagingEnabled={true}
          snapToInterval={width} snapToAlignment='center' persistentScrollbar={true}
          overScrollMode='never' decelerationRate='fast' bounces={false}
          scrollIndicatorInsets={{top: 0, left: 0, bottom: height * 0.757, right: 0}}>
            <CreateRoomView />
            <RequestsView />
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 14,
    color: '#ffff'  
  },

  mini: {
    justifyContent:'center'
  }
});