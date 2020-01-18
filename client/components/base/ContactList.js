import React from 'react';
import { Contact } from './Contact';
import { View } from 'react-native';
import { RequestItem } from '../specific/RequestItem';

export function ContactList(props) {

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      rightSubtitle:"$420.69"
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      rightSubtitle:"$100.69"
    }
  ]

  return (
    <View>
    {
      list.map((l, i) => (
        <RequestItem key={i} leftAvatar={l.avatar_url} title={l.name} subtitle={l.subtitle} rightSubtitle={l.rightSubtitle}/>
      ))
    }
  </View>
  );

}
