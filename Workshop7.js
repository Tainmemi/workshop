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
  TextInput,
} from 'react-native';

export default class Workshop7 extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
    );
  }
};
