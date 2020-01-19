import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Icon, colors } from 'react-native-elements';

export class AccDecButtons extends Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.leftButton}>
            <Button
              title={this.props.name1}
              onPress={this.props.onHandle1}
              buttonStyle={{backgroundColor: 'red'}}
              containerStyle={{width: 150}}
            />
        </View>
        <View style={styles.rightButton}>
            <Button
              title={this.props.name2}
              onPress={this.props.onHandle2}
              buttonStyle={{backgroundColor: 'rgb(37,237,47)'}}
              containerStyle={{width: 150}}

            />
        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    display: "flex",
    height: 50,
    justifyContent: 'space-between',
    
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
  leftButton: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },

  rightButton: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  }

});