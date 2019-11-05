import React, { Component } from 'react';
import { 
    View,
    Alert,
    ImageBackground,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    TextInput
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
                <TextInput
                placeholder="Enter Name"
                style={{width:200, margin:10}}
                onChangeText={userName => this.setState({userName})}
                
                />
                <TextInput
                placeholder="Enter Student Code"
                style={{width:200, margin:10}}
                onChangeText={userCode => this.setState({userCode})}

                />
                <TextInput
                placeholder="Enter E-mail"
                style={{width:200, margin:10}}
                onChangeText={userEmail => this.setState({userEmail})}
                
                />
                <TextInput
                placeholder="Enter Password"
                secureTextEntry={true}
                style={{width:200, margin:10}}
                onChangeText={userPassword => this.setState({userPassword})}
                
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
})
