import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Your Profile and your impact on earth</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})