/**
 * Created by jian on 16-12-14.
 */
import {StyleSheet} from 'react-native';

import {GlobalColors, fixedFontSize} from '../Global.style.js'

export var styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        backgroundColor: '#bc9956',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    outlineButton: {
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1
    },

    buttonText: {
        color: GlobalColors.BUTTON_TEXT,
        fontSize: fixedFontSize(13)
    },

    outlineText: {
        color: 'gray',
        fontSize: fixedFontSize(13)
    }
});