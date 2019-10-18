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

export default class Workshop2 extends Component {

  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'column',
        backgroundColor: "#FF0000", alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BlinkText message="1234" interval={100} />
      </View>
    );
  }
};

class BlinkText extends Component {

  constructor(props) {
    super(props)
    this.state = { isVisible: true };

    setInterval(() => {
      this.setState(oldState => {
        return { isVisible: !oldState.isVisible }
      })
    }, this.props.interval);
  }



  render() {
    let display = this.state.isVisible ? this.props.message: '';
    return (
      <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>
        {display}
      </Text>
    );
  }
}
