import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native'

import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../../graphql/Queries';

import MissionList from '../../components/MissionList';

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