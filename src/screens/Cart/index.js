import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { FlatList, Container, View, Image, Text, Value } from './styles';

const data = [
  {
    id: 1,
    name: 'bulbasaur',
    price: 64 * 1.35,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    amount: 1,
  },
  {
    id: 38,
    name: 'ninetales',
    price: 177 * 1.35,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    amount: 1,
  },
];

export default function Cart() {
  const [pokemon, setPokemon] = useState(data);

  function handleOnPress(id, value) {
    const newPokemon = pokemon.map((item) => {
      if (item.id === id) {
        item.amount = value ? (item.amount += 1) : (item.amount -= 1);
      }
      return item;
    });
    setPokemon(newPokemon);
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={pokemon}
      renderItem={({ item }) => (
        <Container>
          <Image
            source={{
              uri: item.image,
            }}
          />
          <View>
            <Text>{item.name.toUpperCase()}</Text>
            <Text> R$ {item.price.toFixed(2).toString()}</Text>
          </View>
          <AntDesign
            name="pluscircle"
            size={30}
            color="#356abc"
            onPress={() => handleOnPress(item.id, true)}
          />
          <Value>{item.amount}</Value>
          <AntDesign
            name="minuscircle"
            size={30}
            color="#356abc"
            onPress={() => handleOnPress(item.id, false)}
          />
        </Container>
      )}
    />
  );
}
