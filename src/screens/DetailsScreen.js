import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types';

const DetailsScreen = ({route}) => {
  const { detail } = route.params;
  return (
    <View style={styles.container}>
      <Text>{detail}</Text>  
    </View>
  )
}

DetailsScreen.prototype = {
  detail: PropTypes.string
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