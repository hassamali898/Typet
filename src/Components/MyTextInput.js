import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
const MyTextInput =({iconName,dumeText,ispassword,inputValue,setInputValue})=>{
    return (<View style={styles.viewStyle}>
        <FontAwesome5 style={{marginLeft:20}} name = {iconName} size={24} color="#575555"/>
        <TextInput 
            value = {inputValue}
            onChangeText = {setInputValue}
            autoFocus={false} 
            autoCapitalize="none" 
            autoCompleteType="off" 
            autoCorrect={false} 
            secureTextEntry = {ispassword} 
            placeholder={dumeText} 
            placeholderTextColor="#C8C5C5" 
            style={styles.inputStyles}
        />
    </View>);
}
const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        height:55,
        alignItems:'center',
        backgroundColor:"#F8F8F8",
        borderRadius:50,
        marginBottom:10
    },
    inputStyles:{
        flex:1,
        marginHorizontal:15,
        fontSize:14,
    }
});

export default MyTextInput;