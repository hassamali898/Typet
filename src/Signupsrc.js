import React from 'react';
import {StyleSheet,View} from 'react-native';
import LoginFLowDetail from './Components/LoginflowDetail';
const Signupsrc =({navigation})=>{
    return(<View style={styles.viewstyle}>
        <LoginFLowDetail 
            sign={1} 
            btnName ="Sign Up" 
            linkTitle = "If You already Have An Account ?" 
            callBack={()=>navigation.navigate('Login')} 
            btncallBack = {(user,password)=>null}
            nav = {()=>navigation.navigate('mainFlow')}
    /></View>);
}
const styles = StyleSheet.create({
    viewstyle:{
        flex:1,
        backgroundColor:"#fff"
    }
});

export default Signupsrc;