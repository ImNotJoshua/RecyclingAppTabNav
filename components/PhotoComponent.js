import React,{Component} from 'react';
import {Image,StyleSheet,View,Dimensions,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker'

const width= Dimensions.get('window').width;
const largeContainerSize = width/2;
const largeImageSize = width/4;

export default class PhotoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            uploadSource: null
        }
    }
    selectPhoto=()=>{
        const options ={
            quality: 1.0,
            maxWidth: 200,
            maxHeight: 200,
            storageOptions: {skipBackup: true}
        }
        ImagePicker.showImagePicker(options,response=>{
            console.log("Response=",response);
            if(response.didCancel){
                console.log("User cancelled the photo picker");
            }
            else if(response.error){
                console.log("ImagePicker Error", response.error)
            }
            else{
                let source={uri:response.uri}
                this.setState({
                    uploadSource:source
                })
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Image resizeMode='contain' source={require('../assets/hex.png')} style={styles.containerSize}/>
                <TouchableOpacity onPress={this.selectPhoto()}>
                <Image resizeMode='contain' source={require('../assets/PlusIcon.png')} style={styles.imageSize}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    containerSize:{
        width:largeContainerSize,
        height:largeContainerSize,
        justifyContent:'center',
        alignItems:'center',
    },
    imageSize:{
        width:largeImageSize,
        justifyContent:'center',
        alignItems:'center',
    },
})