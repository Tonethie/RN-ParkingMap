import React, { Component } from 'react';
import { 
    View,
    Alert,
    ImageBackground,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header,Left, Body, Title, Button } from 'native-base'

// import { Container } from './styles';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            userEmail:'',
            userPassword:'',
            userCode:'',
        }
    }

    userRegister = () =>{
        //alert('ok');
        const {userName} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;
        const {userCode} = this.state;
        alert("Usuário Registrado!");
    }


  render() {
    return (         
        <Container>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
                <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Login')}>
                    <Icon name='md-power' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                    <Title>Registrar</Title>
                </Body>
            </Header>
            <View style={styles.container}>
                <Title style={{color:'black',
                                alignItems:'center',
                                justifyContent:'center',
                                flex:0.5}}>Cadastre-se para ter acesso ao Sistema</Title>
                <TextInput
                placeholder="Enter Name"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userName => this.setState({userName})}
                //style={styles.inputbox}
                
                />
                <TextInput
                placeholder="Enter Student Code"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userCode => this.setState({userCode})}
                //style={styles.inputbox}

                />
                <TextInput
                placeholder="Enter E-mail"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userEmail => this.setState({userEmail})}
                //style={styles.inputbox}
                
                />
                <TextInput
                placeholder="Enter Password"
                secureTextEntry={true}
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userPassword => this.setState({userPassword})}
                //style={styles.inputbox}
                
                />

                <TouchableOpacity style={styles.button}
                onPress={this.userRegister}
                onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </Container>);
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    button: {
        width: 200,
        backgroundColor: '#c21e1e',
        borderRadius: 25,
        justifyContent:'flex-end',
        paddingHorizontal: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color: '#fff',
        marginVertical:5,
        textAlign: 'center'
    },
    inputbox: {
        width: 200,
        backgroundColor: '#F2F5FB',
        borderRadius: 25,
        borderColor:'black',
        marginVertical:15,
        paddingHorizontal: 16,
    },
})
