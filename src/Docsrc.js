import React from 'react';
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';
import Colors from './theme/Colors';
import {MaterialIcons} from '@expo/vector-icons';
import DocBtnGroup from './Components/DocBtnGroup'
const Docsrc =({navigation})=>{
    return(<View>
        <View style={styles.headerstyle}>
            <View 
                style={{
                    marginTop:45,
                    flexDirection:"row",
                    marginHorizontal:15,
                    justifyContent:"center",
                    alignSelf:"center",
                    alignItems:"center"
                    }}
            >
            <View style={{flex:1}}>
                <TouchableOpacity onPress ={()=>navigation.navigate('Homeflow')}>
                    <MaterialIcons name="close" size={24} color={Colors.back} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <MaterialIcons name="share" size={18} color={Colors.back} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15,alignItems:"center"}}>
                <Text style={{color:Colors.back,fontSize:18,textAlign:"center"}}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={{marginVertical:15}}>
            <DocBtnGroup/>
        </View>
        <View style={{backgroundColor:Colors.gray,height:1,width:"100%"}}>

        </View>
        </View>);
}
const styles = StyleSheet.create({
    headerstyle:{
        backgroundColor:Colors.gray,
        height:80,
        width:"100%"
    },
    docBtnStyle:{
        flexDirection:"row",
        margin:4,
        justifyContent:"space-around",
        alignItems:"center"
    }
});

export default Docsrc;