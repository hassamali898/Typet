import React,{useReducer} from 'react';

export default (Reducer,actions,InitailValue)=>{
    const Context = React.createContext();

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(Reducer,InitailValue);
        
        const BoundAction = {};
        for(let key in actions){
            BoundAction[key] = actions[key](dispatch) 
        }
        return <Context.Provider value = {{state,...BoundAction}}>
            {children}
        </Context.Provider>
    };
    return {Context,Provider}
}