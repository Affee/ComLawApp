/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View,ListView,Image,TouchableOpacity,AlertIOS,Text} from 'react-native';

//引入第三方框架  大括号是子熟悉
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

// 引入其他的模块
import HKHome from './HKHome';
import HKMine from './HKMine';
import HKFind from './HKFind';
import HKMessage from './HKMessage';


export default class HKMain extends Component<Props> {

    render() {
        return (
        <View style={styles.container}>
            <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
                tabBarPosition="bottom"
                {/*常用属性*/}
                onChangeTab={
                    (obj)=>{
                        console.log('切换到了'+obj.i+'个')
                    }
                }
                // locked={ture}
            }
            >
                <HKHome tabLabel = "首页"/>
                <HKMine tabLabel = "我的"/>
                <HKFind tabLabel = "消息"/>
                <HKMessage tabLabel = "消息"/>
                <HK
            </ScrollableTabView>

        </View>

        );
    }

}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },
    instructions:{
        textAlign: 'center',
        color:'#333333',
        marginBottom: 5,
    },

});
