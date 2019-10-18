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

export default class Workshop9 extends Component {

  clickMe() {
    alert("Just click");
  }

  longClick() {
    alert("Long click");
  }
  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableHighlight onPress={this.clickMe} 
        underlayColor="paleturquoise" onLongPress={this.longClick}>
          <Image resizeMode="center"
          source={require('./img/book.png')}
          style={{ width: 300, height: 70, marginTop: 20}} />
        </TouchableHighlight>
      </View>
    );
  }
};
