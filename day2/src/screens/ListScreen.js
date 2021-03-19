import React from 'react';
import {View, Text, StyleSheet, Flatlist} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'},
  ];
  return (
    <Flatlist
      data={friends}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;
