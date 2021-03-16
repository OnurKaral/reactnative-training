import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreen from './src/screens/ListScreen';

const App = () => {
  return (
    <View>
      <ComponentsScreen />
      <ListScreen />
    </View>
  );
};

export default App;
