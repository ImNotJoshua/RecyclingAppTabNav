import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default class ProductListScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Products Scanned</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})