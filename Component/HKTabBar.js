import React, {Component} from 'react';
import {StyleSheet,View,ListView,Image,TouchableOpacity,AlertIOS,Text,TouchableOpacity} from 'react-native';



export default class HKTabBar extends Component<Props> {

    static propTypes ={
        goToPage: PropTypes.func,//跳转到Tab的方法
        activeTab: PropTypes.number,//选中的下表
        tabs: PropTypes.array,//tabs oc中items的数组

        tabNames:React.PropTypes.array,//图片
        tabIconNames:React.PropTypes.array,//item的图片名称
        tabIconSelectedNames:React.PropTypes.array,//选中
    }

    render() {
        return (
            <View style={styles.tabsStyle}>
                {/*返回多个item*/}
                {this.props.tabs.map((tab, i) =>this.renderItem(tab,i))}
                {
                    for(var i = 0;i <tabs){

                }
                }

            </View>

        );
    }

    renderItem(tab, i) {
        <TouchableOpacity onPress={()=>this.props.goToPage(i)}
            key={i}
        >



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
