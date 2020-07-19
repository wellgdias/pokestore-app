import React from 'react';

import { View, Image, UserName, Name, Text } from './styles';

const data = {
  userName: 'wellgdias',
  name: 'Wellington Dias',
  pokemon: 12,
};
export default function User() {
  return (
    <View>
      <Image source={require('../../assets/wellgdias.jpg')} />
      <UserName>User: {data.userName}</UserName>
      <Name>Name: {data.name}</Name>
      <Text>Amount of pokemon{data.pokemon}</Text>
    </View>
  );
}
