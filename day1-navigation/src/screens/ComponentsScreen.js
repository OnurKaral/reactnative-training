import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function ComponentsScreen() {
  const greeting = 'Hi there..';

  return (
    <View>
      <Text style={styles.subtitleStyle}>This is the components screen!</Text>;
      <Text> {greeting} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subtitleStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
