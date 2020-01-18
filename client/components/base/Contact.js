import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';


export function Contact(props) {

  return (
    <ListItem
          leftAvatar={{ source: { uri: props.leftAvatar } }}
          title={props.title}
          titleStyle={styles.titleText}
          subtitle={props.subtitle}
          bottomDivider
        />
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Kailasa',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
