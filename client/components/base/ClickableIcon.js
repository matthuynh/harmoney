import React from 'react';
import { Icon } from 'react-native-elements';

export function ClickableIcon(props) {
  return (
    <Icon
      name={props.name}
      type={props.type}
      color={props.color}
      onPress={props.onPress} />
  );
}