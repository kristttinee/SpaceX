import React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from 'react-native'
import { SHIPS } from '../graphql/Queries';
import { useQuery } from '@apollo/client';

const ShipsScreen = () => {
  const { loading, error, data } = useQuery(SHIPS);

  return (
    <View style={styles.container}>
    {loading ? <ActivityIndicator style={styles.activityIndicator} size="large" color="#00ff00" /> :
      <FlatList
        data={data.ships}
        keyExtractor={(ship) => ship.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Image style={styles.image} source={{ uri: item.image }}></Image>
            </View>
          )
        }}
      />}
  </View>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ShipsScreen;