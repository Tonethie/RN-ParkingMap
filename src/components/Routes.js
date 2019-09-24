import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Menu from '../pages/Menu';
import HomeScreen from '../pages/menuscreens/HomeScreen';
import MapScreen from '../pages/menuscreens/MapScreen';
import PayScreen from '../pages/menuscreens/PayScreen';
import SettingsScreen from '../pages/menuscreens/SettingsScreen';

export default class Routes extends Component{
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Register"/>
                    <Scene key="menu" component={Menu} title="Menu"/>
                    <Scene key="homescreen" component={HomeScreen} title="Home"/>
                    <Scene key="mapscreen" component={MapScreen} title="Map"/>
                    <Scene key="payscreen" component={PayScreen} title="Pay"/>
                    <Scene key="settingscreen" component={SettingsScreen} title="Settings"/>
                </Stack>
            </Router>
        );
    }
}