import React, { Component } from 'react';

import {View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base'


export default class MapScreen extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="map" style={{fontSize: 24, color: tintColor}} />
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor: '#b71c1c'}}androidStatusBarColor="#7f0000">
                  <Left style>
                    <Button transparent>
                      <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Button>
                  </Left>
                  <Right />
                </Header>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Map Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
      },
  });
