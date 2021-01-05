import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { useQuery } from '@apollo/client';
import { GET_PAST_LAUNCHES } from '../graphql/Queries';
import { FlatList } from 'react-native-gesture-handler';
import MissionList from '../components/MissionList';

const DetailsScreen = ({route}) => {
  const { detail } = route.params;
  return (
    <View style={styles.container}>
      <Text>{detail}</Text>  
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

export default DetailsScreen;