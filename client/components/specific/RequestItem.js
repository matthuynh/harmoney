import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export function RequestItem(props) {

  return (
    <ListItem
          leftAvatar={{ source: { uri: props.leftAvatar } }}
          title={props.title}
          titleStyle={styles.titleText}
          rightSubtitleStyle={{color: props.color}}
          subtitle={props.subtitle}
          rightSubtitle={props.rightSubtitle}
          bottomDivider
          chevron
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
