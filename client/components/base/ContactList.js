import React from 'react';
import { Contact } from './Contact';
import { View } from 'react-native';
import { RequestItem } from '../specific/RequestItem';

export function ContactList(props) {

  return (
    <View>
    {
      props.list.map((l, i) => (
        <RequestItem key={i} leftAvatar={l.avatar_url} title={l.name} subtitle={l.subtitle} rightSubtitle={l.rightSubtitle}/>
      ))
    }
  </View>
  );

}
