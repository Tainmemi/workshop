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
    flex: 1, flexDirection: 'column',
    backgroundColor: "#FF0000", alignItems: 'center',
    justifyContent: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class Workshop3 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>MIMI</Text>
      </View>
    );
  }
};
