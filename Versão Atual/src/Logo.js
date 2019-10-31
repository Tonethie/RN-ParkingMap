import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Image style={{
                    height: 250,
                    width: 270,
                }} 
                    source={require('./img/logo_v3.png')} />
            </View>
        );
    }
}
export default Logo;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
