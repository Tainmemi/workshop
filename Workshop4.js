/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row',
    backgroundColor: "#FFFFFF", alignItems: 'center',
    justifyContent: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  myText: {
    width: 100,
    height: 100,
    backgroundColor: "#D0D0D0"
  }
});

export default class Workshop4 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <Text style={styles.myText}>HELLO</Text>
      </View>
    );
  }
};
