import React, { Component } from "react";
import { 
    Alert,
    BackHandler,
    View,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header,Left, Body, Right, Title, Button, Subtitle, Content, Card, CardItem } from 'native-base'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DetailScreen</Text>
            </View>
        );
    }
}

export class Estacionamento1 extends Component {
    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('Map'));
    }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
            <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Map')}>
                    <Icon name='md-arrow-back' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                <Title style={{justifyContent:'center'}}>Detalhes E1</Title>
                </Body>
            </Header>
            <ScrollView>
                <ImageBackground styleName='large-banner' style={{flex:1, height:'100%', width:'100%'}} 
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
                <Card>
                    <CardItem header>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Detalhes do Estacionamento 1</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                Total de Vagas: 250 Veículos
                            </Text>
                            <Text>
                                Vagas Disponíveis: 5 vagas
                            </Text>
                            <Text>
                                Vagas Indisponíveis: 245 Vagas
                            </Text>
                            <Text>
                                Tempo médio de espera: 0 minutos
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
            </Container>
        );
    }
}

export class Estacionamento2 extends Component {
    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('Map'));
    }

    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
            <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Map')}>
                    <Icon name='md-arrow-back' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                <Title style={{justifyContent:'center'}}>Detalhes E2</Title>
                </Body>
            </Header>
            <ScrollView>
                <ImageBackground styleName='large-banner' style={{flex:1, height:'100%', width:'100%'}} 
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
                <Card>
                    <CardItem header>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Detalhes do Estacionamento 2</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                Total de Vagas: 300 Veículos
                            </Text>
                            <Text>
                                Vagas Disponíveis: 0 vagas
                            </Text>
                            <Text>
                                Vagas Indisponíveis: 300 Vagas
                            </Text>
                            <Text>
                                Tempo médio de espera: 13 minutos
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
            </Container>
        );
    }
}
export class Estacionamento3 extends Component {
    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('Map'));
    }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
            <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Map')}>
                    <Icon name='md-arrow-back' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                <Title style={{justifyContent:'center'}}>Detalhes E3</Title>
                </Body>
            </Header>
            <ScrollView>
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
                <Card>
                    <CardItem header>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Detalhes do Estacionamento 3</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                Total de Vagas: 200 Veículos
                            </Text>
                            <Text>
                                Vagas Disponíveis: 170 vagas
                            </Text>
                            <Text>
                                Vagas Indisponíveis: 30 Vagas
                            </Text>
                            <Text>
                                Tempo médio de espera: 0 minutos
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
            </Container>
        );
    }
}
export class CartaoCredito extends Component {
    state = { useLiteCreditCardInput: false,
                AddedCard:false };
    _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    _onFocus = (field) => console.log("focusing", field);
    _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
    
    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = {AddedCard: false};
    }
    handleAddClick(){
        this.setState({AddedCard: true});
        alert('Adicionado');
    }

    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('Pay'));
    }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#980e0e', borderColor:'black'} }>
            <StatusBar backgroundColor='#841515' barStyle='light-content' />
                <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('Pay')}>
                    <Icon name='md-arrow-back' size={24} color='#fff' />
                </Button>
                </Left>
                <Body>
                <Title style={{justifyContent:'center'}}>Add Cartão de Crédito</Title>
                </Body>
            </Header>
            <View style={styles.container}>
                <CreditCardInput
                        autoFocus
                        requiresName
                        requiresCVC
                        requiresPostalCode

                        labelStyle={styles.label}
                        inputStyle={styles.input}
                        validColor={"black"}
                        invalidColor={"red"}
                        placeholderColor={"darkgray"}

                        onFocus={this._onFocus}
                        onChange={this._onChange} />
            </View>
            <View style={{paddingVertical:20,
                        alignItems:'center',
                        justifyContent: 'flex-end'}}>
                <TouchableOpacity style={styles.button}
                        onPress={this.handleAddClick}>
                        <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        
            </Container>
        );
    }
}
export default createBottomTabNavigator({
    Park1:Estacionamento1,
    Park2:Estacionamento2,
    Park3:Estacionamento3,
    AddCard:CartaoCredito,
},{
    navigationOptions:{
        tabBarVisible: false,
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    inner: {
        width:160,
        height: 160,
        backgroundColor: 'rgba(255,200,255, .8)'
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
