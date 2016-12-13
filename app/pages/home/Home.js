/**
 * Created by jian on 16-12-8.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import {styles} from './Home.style';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

export default Home;