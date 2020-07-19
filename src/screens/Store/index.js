import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Card from '../../componentes/Card';

import { FlatList, View } from './styles';

import api from '../../services';

export default function Home() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    api.get('/pokemon?offset=0&limit=50').then((response) => {
      const data = response.data.results.map(async (item) => {
        const response = await api.get(item.url);

        const pokemon = {
          id: response.data.id,
          name: response.data.name,
          price: response.data.base_experience * 1.35,
          image: response.data.sprites.front_default,
          types: response.data.types.map((item) => ({
            slot: item.slot,
            name: item.type.name,
          })),
        };

        return pokemon;
      });
      Promise.all(data).then((response) => {
        setStore(response);
      });
    });
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {store.length === 0 ? (
        <ActivityIndicator size="large" color="#356abc" />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={store}
          renderItem={({ item }) => (
            <View>
              <Card data={item} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
