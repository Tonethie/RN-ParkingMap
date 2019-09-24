import React, { Component } from 'react';

import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base'

class SettingsScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
        <Icon name="settings" style={{fontSize: 24, color: tintColor}} />
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
                <Text>Setting Screen</Text>
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

export default SettingsScreen;