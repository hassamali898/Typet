import React, { useState,useContext,useEffect } from 'react';
import {StyleSheet,Keyboard,Text,View,TouchableOpacity} from 'react-native';
import AddSubjectBtn from './Components/AddSubjectBtn';
import Dialog from 'react-native-dialog'
import Colors from './theme/Colors';
import { FlatList} from 'react-native-gesture-handler';
import {Context} from './Context/AssignContext'
const Homesrc =({navigation})=>{
    const {state,SetCurrentUser,AddSubject} = useContext(Context);
    useEffect(()=>{
        SetCurrentUser();
    },[]);
    const subjectlist = state.subject;
    const [active,setactive] = useState('All');
    const [visible,setvisible] = useState(false);
    const [subject,setSubject] = useState('');
    return(<View 
        style={styles.viewStyle}>
        <Text style={styles.headStyle}>Current Assignments</Text>
        <View style={{flexDirection:"row",marginTop:10}}>
            <View style={{flex:1}}>
                <FlatList
                    data = {subjectlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor = {(o)=>o.sub}
                    style={{width:"100%"}}
                    renderItem ={({item})=>{
                        return(<View>
                            <AddSubjectBtn title ={item.sub} active={active==item.sub} callback={()=>{setactive(item.sub)}}/>
                            </View>        
                    )
                    } }

                />
            </View>
            
            <TouchableOpacity 
                style={{justifyContent:"center"}}
                onPress={()=>{
                    setSubject('');
                    setvisible(true);
                    Keyboard.dismiss;
                }
                }
            >
                <Text 
                    style={{
                        fontSize:20,
                        textAlign:"center",
                        paddingHorizontal:8,
                        color:Colors.gray
                        }}
                >+
                </Text>
            </TouchableOpacity>  
        </View>
        {visible?<View>
                <Dialog.Container visible ={true}>
                <Dialog.Title style={{alignSelf:"center"}}>Add Subject</Dialog.Title>
                <Dialog.Description style={{alignSelf:"center"}}>Please Enter Subject Name
                </Dialog.Description>
                <Dialog.Input 
                    placeholder = "Eng etc" 
                    style={{borderWidth:1,alignSelf:"center",width:"100%",borderRadius:50,paddingLeft:20}}
                    value = {subject}
                    onChangeText = {(text) =>setSubject(text)}
                />
                <Dialog.Button  label="OK" onPress={()=>{setvisible(false);AddSubject(subject)}}/>
                </Dialog.Container>
            </View>:null
        }
        
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
    }
});

export default Homesrc;