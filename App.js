import React from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApolloProvider } from '@apollo/client';

import HomeScreen from './src/screens/Home/HomeScreen';
import { client } from './src/graphql/Client';
import DetailsScreen from './src/screens/DetailsScreen';
import ShipsScreen from './src/screens/ShipsScreen';

import store from './src/store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  )
}

const ShipsStackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Ships">
        <Stack.Screen name="Ships" component={ShipsScreen} />
      </Stack.Navigator>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store} >
        <NavigationContainer style={styles.container}>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Ships" component={ShipsStackNavigation} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
