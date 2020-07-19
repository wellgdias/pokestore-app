import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { View, Image, Name, Type, Price } from './styles';

export default function Card({ data }) {
  const { id, name, price, image, types } = data;
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
      />
      <Name>{name.toUpperCase()}</Name>
     
      <Price>R$ {price.toFixed(2)}</Price>
      <FontAwesome5 name="cart-plus" size={25} color={'#002764'} />
    </View>
  );
}
