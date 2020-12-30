import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../graphql/Queries';
import { FlatList } from 'react-native-gesture-handler';
import MissionList from '../components/MissionList';

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

  return (
    <View style={styles.container}>
      <Text>Welcome to SpaceX Land 🚀</Text>
      <Text>A non official platform for SpaceX's data!</Text>
      {loading ? <ActivityIndicator style={styles.activityIndicator} size="large" color="#00ff00"/> : 
      <FlatList 
        data={data.launchesPast} 
        keyExtractor={(launch) => launch.mission_name}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <MissionList 
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
    backgroundColor: '#fff'
  },
  activityIndicator: {
    alignSelf: 'center'
  }
});

export default HomeScreen;
