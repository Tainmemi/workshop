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

export default class Workshop1 extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#FF0000", alignItems: 'center', justifyContent: 'flex-end' }}>
        <MyText message="1234"/>
      </View>
    );
  }
};

class MyText extends Component {

  render() {
    return(
      <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>
        Welcome component1 {this.props.message}
      </Text>
    );
  }
}
