import React from 'react';
import axios from 'axios';

import {Button, View, Text, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function GetScreen({navigation}) {
  const url;
  const axios = require('axios').default;

  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function (response) {
      // handle success

      url = response.data.hdurl;
      <Text> {response.data.hdurl}</Text>;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}></View>
  );
}

export default GetScreen;
