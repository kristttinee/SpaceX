<<<<<<< HEAD:src/screens/HomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../graphql/Queries';

import MissionList from '../components/MissionList';
=======
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native'

import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../../graphql/Queries';
>>>>>>> 76b887efcd8f4677aa1d1a04dbefae49162b14f4:src/screens/Home/HomeScreen.js

import MissionList from '../../components/MissionList';

<<<<<<< HEAD:src/screens/HomeScreen.js
const HomeScreen = () => {
  const { loading, data } = useQuery(GET_PAST_LAUNCHES);

  const filterLaunches = () => {
    const filter = data.launchesPast.filter(launch =>
      launch.mission_id?.length
      && launch.links.flickr_images?.length)
    return filter
  }
=======
import { addPastLaunches } from './Data/HomeScreen.actions'

const filterLaunches = (launchesList) => {
    return launchesList.filter(launch =>
      launch.mission_id.length > 0
      && launch.links.flickr_images.length > 0)
}

const HomeScreen = ({ navigation, addPastLaunches, launches }) => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

  useEffect(() => {
    addPastLaunches(filterLaunches(data?.launchesPast));
    
  }, [data])
>>>>>>> 76b887efcd8f4677aa1d1a04dbefae49162b14f4:src/screens/Home/HomeScreen.js

  if (loading)
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#00ff00" />;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to SpaceX Land 🚀</Text>
        <FlatList
          data={launches}
          keyExtractor={(launch) => launch.mission_name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <MissionList
              detail={item.details}
              missionName={item.mission_name}
              imageUri={item.links.flickr_images[0]}
            />
          }}
        />
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

const mapStateToProps = (state) => {
  return {
    launches: state.HomeScreen
  }
}
const mapDispatchToProps = { 
  addPastLaunches 
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);