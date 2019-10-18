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
} from 'react-native';

export default class Workshop8 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  clickMe() {
    alert("THANKS");
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center', width: 200 }}>
        <Button title="Press Me" onPress={this.clickMe} />
      </View>
    );
  }
};
