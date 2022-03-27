import React,{useContext} from 'react';
import {StyleSheet, Text,TouchableOpacity,View,Image} from 'react-native';
import { logOutFun } from './Api/loginauth';
import Colors from './theme/Colors';
import IconArrowBtn from './Components/IconArrowBtn';
import {Context} from './Context/AssignContext';
const Profilesrc =({navigation})=>{
    const {state} = useContext(Context)
    return(<View style={styles.viewStyle}>
            <View style ={{flexDirection:"row"}}>
                <Text style={styles.headStyle}>Proflie</Text>
                <TouchableOpacity onPress = {()=>logOutFun(()=>navigation.navigate('loginFlow'))} style={styles.btnstyle}>
                    <Text style={styles.textstyle}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
                <View style={styles.imageStyle}>
                    <Image source={{uri:state.image_url}} style={{height:"100%",width:"100%"}}/>
                </View>
                <View style={styles.profileStyle}>
                    <Text style={{fontWeight:"700",fontSize:24,color:Colors.gray}}>{state.username}</Text>
                    <Text style={{color:Colors.gray}}>{state.email}</Text>
                    <View style={styles.linestyle}></View>
                    <IconArrowBtn 
                        icon = "assignment" 
                        title = "Assignments" 
                        btnCallback={()=>navigation.navigate("Home")}
                    />
                    <IconArrowBtn 
                        icon = "share" 
                        title = "Share with friends" 
                        btnCallback={()=>null}
                    />
                    <IconArrowBtn 
                        icon = "rate-review" 
                        title = "Reviews" 
                        btnCallback={()=>null}
                    />
                    <IconArrowBtn 
                        icon = "info" 
                        title = "Info" 
                        btnCallback={()=>null}
                    />
                </View>
            </View>
        </View>);
}
const styles = StyleSheet.create({
    viewStyle:{
        marginTop:35,
        marginHorizontal:10,
        flex:1,
    },
    headStyle:{
        fontSize:18,
        fontWeight:'100',
        color: Colors.gray,
        flex:1
    },
    btnstyle:{
        height:30,
        width:80,
        borderWidth:1,
        borderColor:Colors.gray,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    textstyle:{
        textAlign:"center",
        fontSize:10,
        color:Colors.gray
    },
    imageStyle:{
        position: "absolute",
        top:15,
        zIndex:3,
        width:130,
        height:130,
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:Colors.gray,
        borderRadius:100,
        elevation:2,
        justifyContent:"center",
        overflow:"hidden",
    },
    profileStyle:{
        backgroundColor:Colors.back,
        marginTop:80,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingTop:70,
        alignItems:"center",
        flex:1,
        zIndex: 0,
    },
    linestyle:{
        backgroundColor:Colors.gray,
        height:1,
        width:"90%",
        alignSelf:"center",
        borderRadius:50,
        marginVertical:20,
    }
    
});

export default Profilesrc;