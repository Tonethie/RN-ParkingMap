import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component<{}> {

    render(){
        return(
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center'
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
        backgroundColor: '#7f0000',
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