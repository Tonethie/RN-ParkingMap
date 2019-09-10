import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

    signup(){
        Actions.signup()
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> SignUp</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#b71c1c',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    signupTextCont: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 20,
      flexDirection: 'row',
    },

    signupText: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 16,
    },

    signupButton: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    }
  });