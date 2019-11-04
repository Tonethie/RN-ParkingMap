import React, { Component } from "react";
import { 
    BackHandler,
    View,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    StatusBar
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header,Left, Body, Right, Title, Button, Subtitle, Content, Card, CardItem } from 'native-base'

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

export default createBottomTabNavigator({
    Park1:Estacionamento1,
    Park2:Estacionamento2,
    Park3:Estacionamento3,
},{
    navigationOptions:{
        tabBarVisible: false,
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});