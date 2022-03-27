import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default AddDocBtn =({navigation})=> {
    const [show,setshow] = useState(0);
    var r = 0;
    if(show){
        r=45;
    }
    else{
        r=0;
    }
    return (<View style={{position:"absolute",zIndex:10,justifyContent:"flex-end",alignSelf:"center",bottom:35}}>
        
        {show?<View><View style={styles.secondBtn}>
            <TouchableOpacity onPress={()=>navigation.navigate('Docs')}>
                <AntDesign name ="filetext1" size={24} color = "#fff"/>
            </TouchableOpacity>
        </View>
        <View style={styles.thirdBtn}>
            <TouchableOpacity onPress={()=>navigation.navigate('Camera')}>
                <AntDesign name ="camerao" size={24} color = "#fff"/>
            </TouchableOpacity>
        </View></View>:null}
        
        <View style={[styles.btnstyle,{transform:[{rotate:`${r}deg`}]}]}>
            <TouchableOpacity onPress={()=>{show?setshow(0):setshow(1)}}>
                <AntDesign name ="plus" size={24} color = "#fff"/>
            </TouchableOpacity>
        </View>
        
    </View>);
}
const styles = StyleSheet.create({
    btnstyle:{
        height:72,
        width:72,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: "#575555",
        borderRadius:50,
        shadowOffset:{height: 6,width:0},
        shadowRadius:5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        elevation:6
    },
    secondBtn:{
        height:62,
        width:62,
        top:45,
        alignItems:'center',
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor: "#575555",
        borderRadius:50,
        shadowOffset:{height: 6,width:0},
        shadowRadius:5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        elevation:6
    },
    thirdBtn:{
        height:52,
        width:52,
        top:-75,
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor: "#575555",
        borderRadius:50,
        shadowOffset:{height: 6,width:0},
        shadowRadius:5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        elevation:6,
    }
})