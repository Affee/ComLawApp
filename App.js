/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View,ListView,Image} from 'react-native';

//json shuju
const data = [
    {
        "image":"1.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
    {
        "image":"2.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
    {
        "image":"3.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
    {
        "image":"4.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
    {
        "image":"5.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
    {
        "image":"6.png",
        "title":"天蓝蓝地蓝蓝，拉起锚开起船",
        "name":"复仇焰魂 布兰德"
    },
  ];


export default class App extends Component<Props> {
  //构造函数数据的初始化
    constructor(props){
        super(props);
        this.state = {
            var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
            this.state = {
                dataSource: ds.cloneWithRows(data)
            }
        }
    }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}//设置数据源
          renderRow={ this.render}

      />
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
