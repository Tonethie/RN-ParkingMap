import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation'
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: {
    screen:LoginScreen,
    navigationOptions:{
      header: null
    }
  },
  Home: {
    screen:HomeScreen,
    navigationOptions:{
      header: null,
    }
  },
  Detail: {
    screen:DetailScreen,
    navigationOptions:{
      header:null
    }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
