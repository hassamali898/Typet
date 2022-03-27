import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';
import Colors from '../theme/Colors';
const AddSubjectBtn =({title,active,callback})=>{
    var activeBgColor;
    var activeTextColor;
    if(active){
        activeBgColor=Colors.gray;
        activeTextColor=Colors.back;
    }
    else{
        activeBgColor=Colors.back;
        activeTextColor=Colors.gray;
    }
    return(
        <TouchableOpacity style={[styles.viewStyle,{width:title.length*10,backgroundColor:activeBgColor}]} onPress={callback}>
            <Text style={[styles.textStyle,{color:activeTextColor}]}>{title}</Text>
        </TouchableOpacity>);
}
const styles =StyleSheet.create({
    viewStyle:{
        height:36,
        minWidth:36,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        marginRight:5,
    },
    textStyle:{
        fontSize:12,
        textAlign:"center",
    }
});
export default AddSubjectBtn;
