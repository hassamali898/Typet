import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import Colors from '../theme/Colors';
import {MaterialIcons,FontAwesome,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';
import DocsStyleBtn from './DocsStyleBtn'
const DocBtnGroup =()=>{
    return(
        <View>
            <View style={styles.docBtnStyle}>
                <DocsStyleBtn>
                    <Text style={{fontWeight:"bold",color:Colors.gray}}>B</Text>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <Text style={{fontStyle:"italic",fontWeight:"bold",color:Colors.gray}}>I</Text>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <Text style={{textDecorationLine:"underline",fontWeight:"bold",color:Colors.gray}}>U</Text>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <Text style={{textDecorationLine:"line-through",fontWeight:"bold",color:Colors.gray}}>S</Text>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <Text style={{fontWeight:"bold",color:Colors.gray}}>{"{}"}</Text>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",color:Colors.gray}}>x</Text>
                        <Text style={{fontWeight:"bold",fontSize:9,color:Colors.gray}}>2</Text>
                    </View>
                </DocsStyleBtn>
                <DocsStyleBtn setwidth={100}>
                    <View style={{flexDirection:"row",marginHorizontal:8,alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",color:Colors.gray,flex:1}}>FONT</Text>
                        <FontAwesome name="caret-down" size={18} color={Colors.gray} />
                    </View>
                </DocsStyleBtn>
            </View>
            <View style={styles.docBtnStyle}>
                <DocsStyleBtn>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",color:Colors.gray}}>x</Text>
                        <Text style={{fontWeight:"bold",fontSize:9,color:Colors.gray,textAlignVertical:"bottom"}}>2</Text>
                    </View>
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialIcons name="format-list-bulleted" size={24} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialIcons name="format-list-numbered" size={24} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialCommunityIcons name="format-align-left" size={20} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialCommunityIcons name="format-align-center" size={20} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialCommunityIcons name="format-align-right" size={20} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <MaterialIcons name="format-color-fill" size={20} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn setwidth={60}>
                    <View style={{flexDirection:"row",marginHorizontal:6,alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",color:Colors.gray,flex:1}}>16</Text>
                        <FontAwesome name="caret-down" size={18} color={Colors.gray} />
                    </View>
                </DocsStyleBtn>
            </View>
            <View style={styles.docBtnStyle}>
                <DocsStyleBtn>
                    <FontAwesome5 name="undo" size={16} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <FontAwesome5 name="redo" size={16} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                    <FontAwesome5 name="link" size={16} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                <MaterialCommunityIcons name="folder-multiple-image" size={18} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn>
                <MaterialIcons name="print" size={20} color={Colors.gray} />
                </DocsStyleBtn>
                <DocsStyleBtn setwidth={100}>
                    <View style={{flexDirection:"row",marginHorizontal:8,alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",color:Colors.gray,flex:1}}>PAGE</Text>
                        <FontAwesome name="caret-down" size={18} color={Colors.gray} />
                    </View>
                </DocsStyleBtn>
                <DocsStyleBtn bgColor={Colors.gray}>
                    <MaterialCommunityIcons name="plus" size={20} color={Colors. back} />
                </DocsStyleBtn>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    docBtnStyle:{
        flexDirection:"row",
        margin:4,
        justifyContent:"space-around",
        alignItems:"center"
    }
});

export default DocBtnGroup