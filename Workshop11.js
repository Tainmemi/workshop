/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class Workshop11 extends Component {

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image resizeMode="center"
          source={require('./img/book.png')}
          style={{ width: 300, height: 70, marginTop: 20 }} /> */}
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEC_L_RMO65lmYWd4x1yfIwMRvoGNEateWh270xMYVciUl_FGd" }}
          style={{ height: 500, width: 500 }} />
      </View>
    );
  }
};
