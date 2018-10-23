/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithProps(['row 1','row 2']),
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView dataSource={this.state.ds}
                  renderRow={this.state.dataSource}


        />
      </View>
      // <ListView
      //     dataSource={this.state.dataSource}
      //     renderRow={(rowData) => <Text>{rowData}</Text>}
      // />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42fff0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#ff5d56',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
