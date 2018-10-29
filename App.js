/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,ListView,Image} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// 导入json数据

const data = [
        {"name" : "Melody", age: 21},
        {"name" : "ZZ", age: 22},
            ];
let ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => !== r2,
      sectionHeaderHasChanged:(s1,s2) => s1 !== s2
      });
      this.state = {
        dataSource:ds.cloneWithRows(data)
      };
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
      <h1>

      </h1>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
