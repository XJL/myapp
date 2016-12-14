/**
 * Created by jian on 16-12-14.
 */
import React, {Component} from 'react'
import {PropTypes, View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './Button.style';

const propTypes = {
    text: PropTypes.string,
    textStyle: Text.propTypes.style,
    iconStyle: Image.propTypes.style,
    enable: PropTypes.bool,
    onPress: PropTypes.func,
    outline: PropTypes.bool
};

const defaultProps = {
    enable: true,
    outline: false
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onPress() {
        if (!this.props.enable) {
            return;
        }

        this.props.onPress && this.props.onPress();
    }

    render() {
        const {
            text,
            textStyle,
            textDisableStyle,
            icon,
            iconStyle,
            style,
            disableStyle,
            outline,
            enable,
            onPress,
            ...others,
        } = this.props;

        let opacity = enable ? 0.8 : 1;

        return (
            <TouchableOpacity
                style={[text ? (outline ? styles.outlineButton : styles.textButton)
                        : styles.button, enable ? style : disableStyle]}
                activeOpacity={opacity}
                onPress={() => this.onPress()}
                {...others}
            >
                {
                    icon &&
                    <Image style={iconStyle} source={icon}/>
                }
                {
                    this.props.text &&
                    <Text
                        style={[outline ? styles.outlineText : styles.buttonText, textStyle,
                            textDisableStyle && !enable && textDisableStyle]}
                    >
                        {text}
                    </Text>
                }
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;