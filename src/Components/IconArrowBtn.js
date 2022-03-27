import React from 'react';
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Colors from '../theme/Colors';

const IconArrowBtn = ({icon,title,btnCallback})=>{
    return <View style={{width:"100%"}}>
        <TouchableOpacity style={styles.btnStyle} onPress={btnCallback}>
            <MaterialIcons name={icon} size ={24} color = {Colors.gray} style={styles.iconStyle}/>
            <Text style={{fontSize:16,flex:1,color:Colors.gray,fontWeight:"100"}}>{title}</Text>
            <MaterialIcons name="navigate-next" size={30} color={Colors.gray} style={styles.iconStyle}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    btnStyle:{
        flexDirection:"row",
        paddingVertical:15
    },
    iconStyle:{
        justifyContent:"center",
        alignSelf:"center",
        marginHorizontal:10,
    }
});

export default IconArrowBtn;