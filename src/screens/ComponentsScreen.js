import React from 'react';
import {Text, StyleSheet} from 'react-native';

function ComponentsScreen() {
  return (
    <div>
      <Text style={styles.textStyle}>This is the components screen!</Text>
    </div>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
