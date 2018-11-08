import React, {Component} from 'react';
import {StyleSheet,View,ListView,Image,TouchableOpacity,AlertIOS,Text} from 'react-native';



export default class HKMine extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    我的
                </Text>
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
