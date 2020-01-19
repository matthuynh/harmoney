import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { RightIconItem } from './RightIconItem';

import { ClickableIcon } from '../base/ClickableIcon';

export function AddContactList(props) {

  return (
    <View>
    {
      props.list.map((l, i) => (
        <RightIconItem key={i} leftAvatar={l.avatar_url} title={l.name} subtitle={l.subtitle}
        rightIcon={{name: 'edit'}}
        />
      ))
    }
  </View>
  );

}
