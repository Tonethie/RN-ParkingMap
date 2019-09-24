import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Field, reduxForm } from 'redux-form'
import Logo from '../components/Logo';
import Form from '../components/Form';
import InputText from '../components/InputText';

import {Actions} from 'react-native-router-flux';

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
    },
    errorText: {
        color: "#ffffff",
        fontSize: 12,
        paddingHorizontal: 16,
        paddingBottom: 8
    }
  });

class Signup extends Component{

    goBack(){
        Actions.pop();
    }
    createNewUser = () => {
        alert("Boom")
    }
    onSubmit = (values) => {
        console.log(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLenght, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return(
            <View>
                <InputText 
                    onChangeText={onChange}
                    maxLenght={maxLenght}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <View style={styles.container}>
                <Logo/>
                <Field 
                    name="matricula"
                    placeholder="Matrícula"
                    component={this.renderTextInput} />
                <Field 
                    name="name"
                    placeholder="Nome"
                    component={this.renderTextInput} />
                <Field 
                    name="email"
                    placeholder="Email"
                    component={this.renderTextInput} />
                <Field 
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={this.renderTextInput} />
                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.matricula){
        errors.matricula = "Necessário uma matrícula"
    }
    if(!values.name){
        errors.name = "Necessário um nome"
    }
    if(!values.email){
        errors.email = "Necessário um email"
    }
    if(!values.password){
        errors.password = "Necessário uma senha"
    }
    return errors;
}

  export default reduxForm({
      form: 'register',
      validate
  })(Signup)