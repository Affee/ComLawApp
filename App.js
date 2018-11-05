/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View,ListView,Image,TouchableOpacity,AlertIOS} from 'react-native';

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

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


export default class App extends Component<Props> {
  //构造函数数据的初始化
    constructor(props){
        super(props);
        this.state = {
            let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
            this.state = {
                dataSource: ds.cloneWithRows(data)
            }
        }
    }

  render() {
    return (
        <View>
            <View>

            </View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}

            />

        </View>

      <ListView
          style={ {marginTop: 25}}
          dataSource={this.state.dataSource}//设置数据源
          renderRow={ this.renderRow}
          renderSectionHeader = {this.renderSectionHeader}

      />
    );
  }

    renderSectionHeader(){
            return(
            <View>
                <Text
            </View>
            )
    }

  返回每一行cell
    renderRow(rowData){
        return(
            <TouchableOpacity>

            </TouchableOpacity>

        }

        )
    }
  //返回具体的cell
  renderRow(rowData,sectionID,rowID,highlightRow){
    console.log(sectionID,rowID);
    return(
    <TouchableOpacity activeOpacity={0.5}
                      onPress={()=>{AlertIOS.alert('购买成功','成功解锁'+rowData.name+'英雄',)}}
    >
        <View>
            <Text style={styles.cellViewStyle}>
                <Image source={require('../资源 1.png')} style={styles.leftImageStyle}/>
                <View style={styles.rightViewStyle}>
                    {/*英雄名称  英雄介绍*/}
                    {/*<Text style = {styles.topTitleStyle}>*/}
                        {/*{rowData.name}*/}
                    {/*</Text>*/}
                    {/*<Text style = {styles.bottomTitleStyle}*/}
                          {/*numberOfLines={3}*/}
                    {/*>{rowData.title}*/}
                    {/*</Text>*/}


                </View>

            </Text>
        </View>
    </TouchableOpacity>
    )
  }
}



const styles = StyleSheet.create({
    cellViewStyle:{
    //    分割线
        borderBottomWidth: 0.5,
        borderBottomColor:'#e8e8e8',
    //    cell内部缩下
        padding :10,
        flexDirection: 'row'


    },
    leftImageStyle:{
        width: 60,
        height: 60,
        marginRight: 15,
    },
    rightViewStyle:{

    },
    topTitleStyle{
        fontSize:20

    },
    bottomTitleStyle{
        width:width*0.7,
        marginTop: 5,

    }

});
