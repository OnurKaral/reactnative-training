import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.title}>Box 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 30,
    color: '#300',
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});

export default App;
