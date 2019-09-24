import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Button, Icon } from 'native-base';
import HomeScreen from './menuscreens/HomeScreen';
import SettingsScreen from './menuscreens/SettingsScreen';
import MapScreen from './menuscreens/MapScreen';
import PayScreen from './menuscreens/PayScreen';

const { width } = Dimensions.get('window')

export default class Menu extends Component{

    render(){
        return(
            <AppDrawerNavigator />
        );
    }
}



const CustomDrawerComponent = (props) => (
    <SafeAreaView>
        <View style={{height:150,backgroundColor:'white', paddingVertical: 10 ,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../images/pm1.png')} style={{height:80, width:80}}/>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
            <TouchableOpacity
             onPress={() => Alert.alert('Log out', 'Você quer sair?',
                [ {text: 'Cancelar', onPress: () => {return null}},
                  {text: 'Confirmar', onPress: () => {Actions.login()}},],
                { cancelable: false }
              )  
            }>
                <Icon name="person" style={{paddingHorizontal: 17, color: 'gray'}}>
                    <Text style={{fontSize:14 ,margin: 16,fontWeight: 'bold',color: "black"}}>          Logout</Text>
                </Icon>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({

    Home:{
        screen:HomeScreen,
    },
    Map:{
        screen:MapScreen,
    },
    Payment:{
        screen:PayScreen,
    },
    Settings:{
        screen:SettingsScreen,
    },
},{
    contentComponent:CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: width,
    contentOptions: {
        activeTintColor: 'orange'
    }
})

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#b71c1c',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });