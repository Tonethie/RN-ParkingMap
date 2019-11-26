import React, { Component } from "react";
import { 
    Alert,
    BackHandler,
    View,
    Text,
    TextInput,
    ScrollView,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header,Left, Body, Right, Title, Button, Subtitle, Content, Card, CardItem } from 'native-base'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import CalendarPicker from 'react-native-calendar-picker';

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
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Park3_1')}>
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
                </TouchableHighlight>
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
export class Estacionamento3_1 extends Component {
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
                <Title style={{justifyContent:'center'}}>Mapa de Vagas E3</Title>
                </Body>
            </Header>
            <ScrollView>
                <ImageBackground styleName='large-banner' style={{flex:1, height:'100%', width:'100%'}} 
                    source={require('../img/mapa_e3.png')}>
                    <View style={{paddingVertical: 350, alignItems:'center'}}>
                    </View>
                </ImageBackground>
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
export class Mensalidade extends Component {
    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('Pay'));
    }
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
     
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
                <Title style={{justifyContent:'center'}}>Mensalidade</Title>
                </Body>
            </Header>
            <View style={styles.container}>
                <Title style={{color:'black',
                                alignItems:'center',
                                justifyContent:'center',
                                flex:0.5}}>Cadastre-se para ter acesso ao Sistema</Title>
                <TextInput
                placeholder="Placa do Carro"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userName => this.setState({userName})}
                //style={styles.inputbox}
                
                />
                <Text style={{marginVertical:20,height: 20, width: 200, borderColor: 'gray', borderWidth: 1}}> Data de Vencimento do Boleto</Text>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                />

                <TouchableOpacity style={styles.button}
                onPress={this.userRegister}
                onPress={()=>this.props.navigation.navigate('Pay')}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            </Container>
        );
    }
}
export class TicketAvulso extends Component {
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
                <Title style={{justifyContent:'center'}}>Avulso</Title>
                </Body>
            </Header>
            <View style={styles.container}>
            <Title style={{color:'black',
                                alignItems:'center',
                                justifyContent:'center',
                                flex:0.2}}>Pagamento de Tickets</Title>
    
                <TextInput
                placeholder="Número do Ticket"
                style={{marginVertical:20,height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={userName => this.setState({userName})}
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
                onPress={()=>this.props.navigation.navigate('Pay')}>
                    <Text style={styles.buttonText}>Pagar</Text>
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
    Park3_1:Estacionamento3_1,
    AddCard:CartaoCredito,
    Mensal:Mensalidade,
    Avulso:TicketAvulso
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