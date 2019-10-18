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
  FlatList,
  Image,
} from 'react-native';

export default class Workshop12 extends Component {

  renderListHeader() {
    return (
      <View>
        <Image source={require('./img/images.png')}
          style={{ width: '100%', height: 200, resizeMode: 'contain', marginBottom: 40 }} />
      </View>
    )
  }

  renderItem(item) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', borderRadius: 7, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <Image source={require('./img/logo.jpg')} style={{ width: 45, height: 45, borderRadius: (45 / 2) }} />
          <View style={{ flexDirection: 'column', marginLeft: 16 }}>
            <Text>Brown and Sally</Text>
            <Text style={{ color: 'dimgray', fontStyle: "italic" }}>~Coffee time~</Text>
          </View>
        </View>
        <Image source={require('./img/brown_sally.jpg')} style={{ width: '100%', height: 350 }} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ justifyContents: 'center', backgroundColor: 'cornsilk' }}>
        <FlatList style={{ padding: (0, 32, 0, 32) }} data={[1, 2, 3, 4]}
          ListHeaderComponent={this.renderListHeader}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
};
