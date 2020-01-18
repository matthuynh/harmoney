import React from 'react';
import { Input } from 'react-native-elements';

export function InputTextField(props) {
  return (
    <Input
      label={props.label}
      placeholder={props.text}
    />
  );
}
