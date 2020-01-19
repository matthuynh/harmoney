import React from 'react';
import { View } from 'react-native';
import { RightIconItem } from './RightIconItem';

export function InvitedList(props) {

  return (
    <View>
    {
      props.list.map((l, i) => (
        <RightIconItem key={i} leftAvatar={l.avatar_url} title={l.name} subtitle={l.subtitle}
        rightIcon={{name: "more"}}
        />
      ))
    }
  </View>
  );

}
