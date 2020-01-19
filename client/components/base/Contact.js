import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';


export function Contact(props) {

  return (
    <TouchableOpacity style={styles.button} >
      <ListItem
            leftAvatar={{ source: { uri: props.leftAvatar } }}
            title={props.title}
            style={styles.contact}
            titleStyle={styles.titleText}
            subtitle={props.subtitle}
            bottomDivider
          />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Kailasa',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contact : {
    paddingTop: 10,
    width: 400
  }
  ,
  button: {
    alignItems: 'center', 
    position: 'relative',
    top: 0,
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
}
});
