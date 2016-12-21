/**
 * Created by jian on 16-12-8.
 */
import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Navigator,
    BackAndroid,
} from 'react-native';
import SplashScreen from './SplashScreen';
import store from '../modules/redux/store';
import {Provider} from 'react-redux';
import {styles} from './App.style';

let tempNavigator;
let isRemoved = false;

class App extends Component {
    constructor(props) {
        super(props);
    }

    static configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        const Component = route.component;
        tempNavigator = navigator;
        if (route.name === 'WebViewPage') {
            BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
            isRemoved = true;
        } else if (isRemoved) {
            BackAndroid.addEventListener('hardwareBackPress', this.goBack);
            isRemoved = false;
        }
        return (
            <Component navigator={navigator} route={route}/>
        );
    }

    goBack() {
        // TODO: 物理返回键的点击事件
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar /*barStyle="light-content" */ hidden={true} translucent={true}/>
                <Provider store={store} key="provider">
                    <Navigator
                        initialRoute={{component: SplashScreen}}
                        configureScene={this.configureScene}
                        renderScene={this.renderScene}
                    />
                </Provider>
            </View>
        );
    }
}

export default App;