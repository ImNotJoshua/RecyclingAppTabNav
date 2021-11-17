import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';


export default class CameraScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> Scan </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})