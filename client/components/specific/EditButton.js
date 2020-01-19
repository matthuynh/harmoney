import React from 'react';
import { ClickableIcon } from '../base/ClickableIcon';

export function EditButton(props) {
  return (
    <ClickableIcon name="edit" type="font-awesome"
    onPress={() => console.log('hello')}/>
    
  );
}