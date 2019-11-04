import React, { Component } from "react";
import { 
    ImageBackground,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'; 
import Logo from '../Logo';

class LoginScreen extends Component {

    render() {
        return (
            
            <ImageBackground source={require('../img/puc4.jpg')} 
            style={styles.backgroundImage}>
                <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Logo />
                <View style={styles.container}>
                    <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Email"
                            placeholderTextColor = "#fff"
                            selectionColor='#fff'
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.password.focus()}
                            />
                    <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor = "#fff"
                            ref={(input) => this.password = input}
                            />
                        <TouchableOpacity style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>   
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flexGrow:1,
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
    },
    backgroundContainer: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderColor: 'black',
        flex:1,
        paddingVertical:4
    },
    inputBox: {
        width: 250,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10,
    },

    button: {
        width: 200,
        backgroundColor: '#c21e1e',
        borderRadius: 25,
        marginVertical:10,
        paddingHorizontal: 16,
    },

    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color: '#fff',
        marginVertical:5,
        textAlign: 'center'
    }
});
