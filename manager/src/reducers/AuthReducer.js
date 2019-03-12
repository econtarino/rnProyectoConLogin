import {EMAIL_CHANGE,PASSWORD_CHANGE}  from '../actions/types'
const INITIAL_STATE = { email : '',password: ''  }
export default (state=INITIAL_STATE,action) => {
   switch (action.type){
        case PASSWORD_CHANGE: 
        return {
           ...state,
           password: action.password
        }
        case EMAIL_CHANGE : 
        return {
           ...state ,
           password: action.payload
        }
        default: state;
   }
}