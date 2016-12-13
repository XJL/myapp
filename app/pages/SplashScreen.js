/**
 * Created by jian on 16-12-8.
 */
import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import Home from './home/Home';
import {styles} from './SplashScreen.style';

const splashImg = require('../images/splash_img.jpg');

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        
        this.timer = setTimeout(() => {
            this.skip();
        }, 3000);
    }

    skip() {
        clearTimeout(this.timer);
        this.timer = null;
        this.props.navigator.resetTo({component: Home});
    }

    render() {
        return (
            <Image source={splashImg} style={styles.img}>
                <TouchableOpacity
                    style={styles.skip}
                    activeOpacity={1}
                    onPress={this.skip.bind(this)}
                >
                    <Text>跳过</Text>
                </TouchableOpacity>
            </Image>
        );
    }
}

export default SplashScreen;