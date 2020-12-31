import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native'
import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../graphql/Queries';
import { FlatList } from 'react-native-gesture-handler';
import MissionList from '../components/MissionList';
import { useEffect } from 'react';


const HomeScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

  const filterLaunches = () => {
    const filter = data.launchesPast.filter(launch =>
      launch.mission_id.length > 0
      && launch.links.flickr_images.length > 0)
    return filter
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to SpaceX Land 🚀</Text>
      {loading ? <ActivityIndicator style={styles.activityIndicator} size="large" color="#00ff00" /> :
        <FlatList
          data={filterLaunches()}
          keyExtractor={(launch) => launch.mission_name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <MissionList
              detail={item.details}
              missionName={item.mission_name}
              imageUri={item.links.flickr_images[0]}
            />
          }}
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginVertical: 10
  },
  activityIndicator: {
    alignSelf: 'center'
  }
});

export default HomeScreen;
