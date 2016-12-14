/**
 * Created by jian on 16-12-8.
 */
import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';

// 常用变量
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const HAIR_LINE = 1 / PixelRatio.get();

export const GlobalColors = {
    THEME: '#ffbb37',

    BUTTON_TEXT: '#fefeff',

};

export const GlobalStyles = {

};

export const GlobalFontSizes = {

};

// 字体大小不随系统的字体设置而变化
export function fixedFontSize(fontSize) {
    if(Platform.OS === 'android') {
        return fontSize * PixelRatio.get() / PixelRatio.getFontScale();
    }else {
        return fontSize;
    }
}