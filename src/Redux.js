import axios from "axios";
import {combineReducers,createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initial={
    name:"",
    email:"",
    password:"",
}
const Regreducer=(state=initial,action)=>{
    switch(action.type)
    {
        case "name": return{
            ...state,
            name:action.payload,
        }
        case "email": return{
            ...state,
            email:action.payload,
        }
        case "password": return{
            ...state,
            password:action.payload,
        }
        default: return state
    }
}
const Datareducer=(state=[],action)=>{
    switch(action.type)
    {
        case "FETCH": return action.payload;
        default: return state
    }
}

const rootReducer=combineReducers({
    Reg: Regreducer,
    Data:Datareducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export const getData=(payload)=>{
        return{
            type:"FETCH",
            payload

        }
}
export const getFetch=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/registers").then(res=>{
            dispatch(getData(res.data))
        })
    }
}
export const Name=(e)=>{
    return{
        type: "name",
        payload: e
    }
}
export const Email=(e)=>{
    return{
        type: "email",
        payload:  e
    }
}
export const Pass=(e)=>{
    return{
        type: "password",
        payload: e
    }
}