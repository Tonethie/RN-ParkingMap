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
            userCurso:'',
            userCPF:'',
            userCode:'',
        }
    }

    userRegister = () =>{
        //alert('ok');
        const {userName} = this.state;
        const {userCurso} = this.state;
        const {userCPF} = this.state;
        const {userCode} = this.state;
        fetch('http://192.168.0.9:4545/alunos', {
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                name:userName,
                curso:userCurso,
                cpf:userCPF,
                code:userCode,
            })
        })
        .then((response) => response.text())
            .then((responseJson) =>{
                alert(responseJson);
            })
            .catch((error)=>{
                console.error(error);
            })
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
                placeholder="Enter Curso"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userCurso => this.setState({userCurso})}
                //style={styles.inputbox}
                
                />
                <TextInput
                placeholder="Enter CPF"
                secureTextEntry={true}
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userCPF => this.setState({userCPF})}
                //style={styles.inputbox}
                
                />

                <TouchableOpacity style={styles.button}
                onPress={this.userRegister}>
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
