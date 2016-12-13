/**
 * Created by jian on 16-12-8.
 */
import {StyleSheet, PixelRatio} from 'react-native';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../common/Global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    skip: {
        position: 'absolute',
        top: 30,
        right: 30,
        width: 80,
        height: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }
});