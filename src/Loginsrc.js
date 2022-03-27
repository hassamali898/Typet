import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginFLowDetail from './Components/LoginflowDetail';
import {emailLogin} from './Api/loginauth';
const Loginsrc =({navigation})=>{
    return(<View style={styles.viewstyle}>
        <LoginFLowDetail 
            btnName ="Log in" 
            linkTitle = "If You Don't Have An Account ?" 
            callBack={()=>navigation.navigate('SignUp')} 
            btncallBack={(user,password)=>{emailLogin(user,password,()=>navigation.navigate('mainFlow'))}}
            nav = {()=>navigation.navigate('mainFlow')}
        /></View>);
}
const styles = StyleSheet.create({
    viewstyle:{
        flex:1,
        backgroundColor:"#fff",
    }
});

export default Loginsrc;