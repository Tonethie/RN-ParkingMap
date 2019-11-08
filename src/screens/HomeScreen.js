import React, { Component } from "react";
import { 
    Switch,
    View,
    ScrollView,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header,Left, Body, Title, Button, Item, Input } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import {CartaoCredito, Mensalidade, TicketAvulso} from './DetailScreen'

export class HomeScreen extends Component {
    render() {
        return (
            <View />
        );
    }
}

export class MapScreen extends Component {
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
                    <Title>Estacionamentos</Title>
                    </Body>
                </Header>
                      <ScrollView>
                        <TouchableOpacity onPress={()=>this.setState({edit: !edit}), ()=>this.props.navigation.navigate('Park3')}>
                            <ImageBackground styleName='large-banner' style={{flex:1, height:'100%', width:'100%'}} 
                                source={require('../img/estacionamento3.png')}>
                                <View style={{paddingVertical: 80, alignItems:'center'}}>
                                    <Text style={{
                                        fontWeight:'bold',
                                        fontSize:42,
                                        color: '#fff',
                                        borderColor:'black'
                                    }}> E3 </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({edit: !edit}),()=>this.props.navigation.navigate('Park2')}>
                            <ImageBackground style={{flex:1, height:'100%', width:'100%'}} 
                                source={require('../img/estacionamento2.png')}>
                                 <View style={{paddingVertical: 80, alignItems:'center'}}>
                                    <Text style={{
                                        fontWeight:'bold',
                                        fontSize:42,
                                        color: '#fff',
                                        borderColor:'black'
                                    }}> E2 </Text>
                                </View>
                            </ImageBackground>
                         </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Park1')}>
                            <ImageBackground style={{flex:1, height:'100%', width:'100%'}} 
                                source={require('../img/estacionamento1.png')}>
                                <View style={{paddingVertical: 80, alignItems:'center'}}>
                                    <Text style={{
                                        fontWeight:'bold',
                                        fontSize:42,
                                        color: '#fff',
                                        borderColor:'black'
                                    }}> E1 </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ScrollView>
            </Container>
        );
    }
}

export class PayScreen extends Component {


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
                    <Title>Pagamentos</Title>
                </Body>
            </Header>
            <View style={{flex:1, backgroundColor:"white"}}>
                <View style={styles.postContainer}>
                        <Button light style={{alignItems:'center', justifyContent:'center'}}
                        onPress={()=>this.setState({edit: !edit}),()=>this.props.navigation.navigate('AddCard')}>
                                <Icon name="ios-add-circle-outline" size={40} color='green'/>
                                <Text> Adicionar Cartão</Text>
                        </Button>
                </View>
                <View style={styles.postContainer}>
                        <Button light style={{alignItems:'center', justifyContent:'center'}}
                        onPress={()=>this.setState({edit: !edit}),()=>this.props.navigation.navigate('Mensal')}>
                            <Icon name="ios-mail" size={40} color='black'/>
                            <Text> Mensalidade</Text>
                        </Button>
                </View>
                <View style={styles.postContainer}>
                        <Button light style={{alignItems:'center', justifyContent:'center'}}
                        onPress={()=>this.setState({edit: !edit}),()=>this.props.navigation.navigate('Avulso')}>
                            <Icon name="ios-mail" size={40} color='black'/>
                            <Text> Avulso</Text>
                        </Button>
                </View>
            </View>
            </Container>
        );
    }
}

export class ProfileScreen extends Component {
    state = {
        avatarSource: null,
        defaultAvatar:'https://bootdey.com/img/Content/avatar/avatar6.png'
    }
    selectImage = async () => {
        ImagePicker.showImagePicker({noData:true,mediaType:'photo'}, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              this.setState({
                avatarSource: response.uri,
                defaultAvatar: null
              });
            }
          });
    }
    render() {
        return (
            <Container>
                <View style={styles.header}>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
                <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Login')}>
                    <Icon name='md-power' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                <Title>Perfil</Title>
                </Body>
            </Header>
                <View style={{alignItems:'center', margin:5}}>
                <TouchableOpacity style={{
                                    width:123, 
                                    height:123, 
                }}onPress={this.selectImage}>
                    <Image style={styles.avatar} source={{uri:this.state.defaultAvatar}}/>
                    <Image style={styles.avatar} source={{uri:this.state.avatarSource}}/>                     
                        
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>Luiz Carvalho</Text>
                    <Text style={styles.info}>Aluno Graduação / Eng. Computação </Text>
                    <Text style={styles.description}>Descrição sobre qualquer coisa apenas para encher linguiça e ver o quanto a curiosidade te leva a ler tudo.</Text>
                
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Botão 1</Text>  
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Botão 2</Text> 
                    </TouchableOpacity>

                </View>

            </Container>
        );
    }
}

export default createBottomTabNavigator({
    Map:{
        screen: MapScreen,
        navigationOptions:{
            tabBarLabel:'Map',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-map" size={24} />
            )
        }
    },

    Pay:{
        screen: PayScreen,
        navigationOptions:{
            tabBarLabel:'Pay',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-card" size={24} />
            )
        }
    },
    Profile:{
        screen: ProfileScreen,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-person" size={24} />
            )
        }
    }
},{
    navigationOptions:{
        tabBarVisible: true,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postContainer:{
        margin: 30,
        padding: 30,
        borderRadius: 3
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    header:{
        backgroundColor: "#c72e2e",
        height:210,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf:'center',
        position: 'absolute',
        margin:80,
        flex:1
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 90,
        padding:30
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#841515",
      },
      switch: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
      },
      label: {
        color: "black",
        fontSize: 12,
      },
      input: {
        fontSize: 16,
        color: "black",
      },
});
