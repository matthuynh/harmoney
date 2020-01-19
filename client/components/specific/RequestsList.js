import React from 'react';
import { View } from 'react-native';
import { RequestItem } from './RequestItem';

export function RequestsList(props) {

  return (
    <View>
    {
      props.list.map((l, i) => (
        <RequestItem key={i} leftAvatar={l.avatar_url} title={l.name} subtitle={l.subtitle}
        rightSubtitle={l.rightSubtitle} color={l.color}
        />
      ))
    }
  </View>
  );

}
