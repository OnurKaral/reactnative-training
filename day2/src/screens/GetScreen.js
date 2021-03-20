import React from 'react';
import axios from 'axios';

import {Button, View, Text, StyleSheet} from 'react-native';

function GetScreen({navigation}) {
  const axios = require('axios').default;

  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ListScreen</Text>
    </View>
  );
}

export default GetScreen;
