import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MissionList = ({ missionName, imageUri }) => {
  return (
    <View>
      <Image 
        style={styles.image}
        source={{uri: imageUri}}
      />
      <Text style={StyleSheet.text}>Mission Name: {missionName}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }

});

export default MissionList;