/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.buchong}>
              真的是很操蛋的啊，不过无所谓了，爱咋咋地吧，做好自己，开始学习，不然后面的路，又会是怎么样子的呢，不敢想象，总之，加油再加油吧。生活就是如此吧，可能会遇到很多的挫折和不顺心的事情，我们能做的就是淡定的面对这些事情。有些事情，我们伤心难过，那是给与太多的期待，如果哪天不在给与期待或者，讲真不再欠你的冠军，只是自己没有把握，那题真的是感觉到，
              骄兵必败，还有所有的东西，只有自己变强大才行，谁也指望不上.还有，有多久没有好好的学习进步了，本来想着等t回来，好好谈谈的，但是也不过如此，真鸡儿蛋疼，又要拖着，仔细想想，虽说公司是有一部分问题，还有一部分是因为不想换工作之类的，确实太麻烦，
              折腾成这个样子，可是最重要的不还是自己不够强大嘛，感觉有点小蛋疼的啊，翻山越岭，浪费了多少时间和经历才算完呢，真的是够够的呢。真的是好气，可是，有种愤怒是源于无能，虽然往事不可追，可是现在自己也没有努力的啊，真的是够够的，现在无言的愤怒，有时候
              人就是如此吧，总会对现在稳定的生活不想动，可家里的事情又有这么多，希望宝宝家人都平平安安的度过的。虽然不开心，可还是不想丢掉工作之类的呢，可能奶油土自己变得强大了，一切都会好起来啦。总之加油的吧！
              真的是很操蛋的啊，不过无所谓了，爱咋咋地吧，做好自己，开始学习，不然后面的路，又会是怎么样子的呢，不敢想象，总之，加油再加油吧。
          </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.buchong}>
        真的是很操蛋的啊，不过无所谓了，爱咋咋地吧，做好自己，开始学习，不然后面的路，又会是怎么样子的呢，不敢想象，总之，加油再加油吧。
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
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
  buchong:{
      textAlign: 'center',
      color: '#122215',
      marginBottom: 10,
  },
});
