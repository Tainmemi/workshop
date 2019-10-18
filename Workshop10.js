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

export default class Workshop10 extends Component {

  constructor(props) {
    super(props)
    this.state = { active: false };
  }

  clickMe() {
    this.setState(oldState => {
      return { active: !oldState.active }
    })
  }

  clickWithArrow = () => {
    this.setState(oldState => {
      return { active: !oldState.active }
    })
  }

  clickWithBinding() {
    this.setState(oldState => {
      return { active: !oldState.active }
    })
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMe} />
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickWithArrow} />
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickWithBinding.bind(this)} />
      </View>
    );
  }
};
