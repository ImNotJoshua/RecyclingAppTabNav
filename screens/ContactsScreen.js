import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
let customFonts = {'Bugglegum-Sans':require ('../assets/BubblegumSans-Regular.ttf')}

export default class ContactsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            fontsLoaded: false
        }
    }
    async loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded: true})
    }
    componentDidMount(){
        this.loadFontsAsync()
    }
    render(){
        if(!this.state.fontsLoaded){
            return(
                <AppLoading></AppLoading>
            )
        }else{
        return(
            <View style={styles.container}>
                <Text>Contact who recycle your products</Text>
            </View>
        )
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})