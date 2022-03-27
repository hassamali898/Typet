import React,{useState} from 'react';
import {StyleSheet,View,TouchableOpacity,Text,KeyboardAvoidingView} from 'react-native';
import MyTextInput from './MyTextInput';
import Spacing from './Spacing';
import {FontAwesome} from '@expo/vector-icons';
import {Logo} from '../Svg/Svgfiles';
import {loginWithFacebook, loginWithGoogle} from '../Api/loginauth';

const LoginflowDetails=({sign,btnName,linkTitle,callBack,btncallBack,nav})=>{
    const [user,setUser] = useState('');
    const [password,setpassword] = useState('');
    const [newpassword,setNewpassword] = useState('');
    
    return (<View style={styles.viewStyle}>
        <View style={styles.imagestyle}><Logo/></View>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
            
            <View style={{height:265}}>
                {sign? <Spacing s = {35}/>:<Spacing s = {100}/>}
                <MyTextInput 
                    iconName="user-alt" 
                    dumeText="Email@example.com" 
                    inputValue = {user} 
                    setInputValue ={(text)=>setUser(text)}
                />
                <MyTextInput 
                    inputValue = {password} 
                    setInputValue ={(text)=>setpassword(text)}
                    iconName="lock" 
                    ispassword={true} 
                    dumeText="Password"
                />
                {sign? 
                    <MyTextInput 
                        iconName="lock" 
                        ispassword={true} 
                        dumeText="Re-Password"
                    />
                :null}
            </View>
        
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.linkstyle} onPress = {callBack}>
                <Text style={{color:'#2E60D3',textDecorationLine:'underline',textAlign:'left',fontSize:12}}>{linkTitle}</Text></TouchableOpacity>
            <TouchableOpacity 
                style={[styles.Btnstyle ,{backgroundColor:"#575555"}]} 
                onPress={()=>btncallBack(user,password)}>
                    <Text style={{textAlign:'center',fontSize:14,color:'white'}}>{btnName}</Text>
            </TouchableOpacity>
        </View>
        <View style ={styles.addline}>

        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                onPress = {()=> loginWithFacebook(nav)}
                style={[styles.Btnstyle ,{backgroundColor:"#2E60D3",flexDirection:'row',alignItems:'center',paddingHorizontal:45}]}>
                    <FontAwesome name="facebook" size={30} color='white'/>
                    <Text style={{textAlign:'left',color:'white',fontSize:10,paddingLeft:5}}>Log in with Facebook</Text>
                    </TouchableOpacity>
            <View style={{width:'4%'}}></View>
            <TouchableOpacity 
                onPress = {()=>loginWithGoogle(nav)}
                style={[styles.Btnstyle ,{backgroundColor:"#EA4335",flexDirection:'row',alignItems:'center',paddingHorizontal:45}]}><FontAwesome name="google" size={30} color='white'/><Text style={{textAlign:'left',color:'white',fontSize:10,paddingLeft:5}}>Log in with Google</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    </View>);
}
const styles = StyleSheet.create({
    imagestyle:{
        alignSelf:"center",
        width:120,
        height:100
    },
    viewStyle:{
        flex:1,
        paddingTop:'30%',
        marginHorizontal:15,
        marginVertical:20,
        paddingVertical:5,
        flexWrap:'nowrap',
        justifyContent:'space-around',
        
        overflow:'hidden',
    },
    Btnstyle:{
        height:55,
        width:'48%',
        justifyContent:'center',
        borderRadius:50
    },
    linkstyle:{
        width:'52%',
        paddingLeft:15,
        overflow:'hidden',
        justifyContent:'center'
    },
    addline:{
        marginVertical:35,
        height:1,
        width:100,
        alignSelf:"center",
        backgroundColor: "#C8C5C5",
    }
});
export default LoginflowDetails;