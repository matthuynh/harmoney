import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { ClickableIcon } from '../base/ClickableIcon';

export function RightIconItem(props) {

  return (
    <ListItem
          leftAvatar={{ source: { uri: props.leftAvatar } }}
          title={props.title}
          titleStyle={styles.titleText}
          subtitle={props.subtitle}
          rightIcon={props.rightIcon}
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
