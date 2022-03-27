import React from 'react'
import {StyleSheet,TouchableOpacity, View} from 'react-native'
import Colors from '../theme/Colors';

const DocsStyleBtn =({children,setwidth,bgColor})=>{
    return(<View>
        <TouchableOpacity style={[styles.btnstyle,{width:setwidth,backgroundColor:bgColor}]}>
            {children}
        </TouchableOpacity>
    </View>);
}
const styles = StyleSheet.create({
    btnstyle:{
        height:35,
        marginHorizontal:5,
        borderColor:Colors.gray,
        borderWidth:1,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
    }
});
DocsStyleBtn.defaultProps={
    setwidth:35,
    bgColor:Colors.back,
}
export default DocsStyleBtn;