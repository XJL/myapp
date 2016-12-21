import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../common/components/Button';
import {test} from '../../modules/redux/modules/auth';
import {connect} from 'react-redux';
import {styles} from './Home.style';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    async onPress() {
        try {
            await this.props.test();
            this.setState({data: this.props.res});
        }
        catch (error) {
            console.log('error', error.message);
        }
    }

    render() {
        return(
            <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
                onPress={()=>this.onPress()}
            >
                <Text style={styles.welcome}>
                    {this.props.res}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect (state => ({
    res: state.auth && state.auth.test
}), dispatch => ({
    test: () => dispatch(test())
}))(Home);