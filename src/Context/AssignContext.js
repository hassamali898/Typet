import React from 'react';
import createAssignContext from './createAssignContext';
import {f,auth} from '../../Config/Config'
const Reducer = (state,action)=>{
    switch (action.type) {
        case 'add_Assign':
            return '';
        case 'SetUser':
            const user = action.user;
            return {...state,username:user.username,email:user.email,image_url:user.profile_picture,subject:[{
                sub:"All",
                sub_data:[]
            }]};
            
        case 'addSub':
            if(action.name!= '' && !state.subject.some((o)=>o.sub ===action.name))
                return {...state,subject:[...state.subject,{sub:action.name,sub_data:[]}]};
            else
                return state;
            default:
            return state;
    }
}
const SetCurrentUser =(dispatch)=>{
    return()=>{
        var userId = f.auth().currentUser.uid;
        f.database()
        .ref('/users/' + userId).once('value')
        .then((snapshot) => {
            const user = snapshot.val()
            dispatch({type:'SetUser',user});
        }
        )
            
        
    }
}
const AddSubject =(dispatch)=>{
    return (name)=>{
        console.log(name),
        dispatch({type:'addSub',name})
    }
}
const Add_Assignment = (dispatch) =>{
    return ()=>{
        
    }
}
export const {Context,Provider} = createAssignContext(Reducer,{SetCurrentUser,AddSubject},[]);
