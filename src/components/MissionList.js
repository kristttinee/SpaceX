import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const MissionList = ({ missionName, imageUri, detail }) => { //Change name: Mision Item

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {
        navigation.navigate('Details', { detail });
      }}
      >
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
        />
        <Text style={styles.text}>Mission Name: {missionName}</Text>
      </TouchableOpacity>
    </View>
  )
}

MissionList.propTypes = {
  detail: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  imageUri: PropTypes.string
};

const shadowStyle = {
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.16,
  shadowRadius: 2,
  elevation: 2,
};

const styles = StyleSheet.create({
  container:{
    ...shadowStyle,
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#FFF',
    padding: 16,
    marginVertical: 15,
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: 200,
    // resizeMode: '' Revisar
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }

});

export default MissionList;