import *as ActionType from "./constants"

const initialState={
    loadingUser: false,
    dataUser: null,
    errorUser: null,

    loadingCancel: false,
    dataCancel: null,
    errorCancel: null,

    keyword: "",
};
 const userProfileReducer=(state=initialState, action)=>{
    switch(action.type){
        // info userProfile
        case (ActionType.USER_PROFILE_REQUEST):{
            state.loadingUser=true;
            state.dataUser=null;
            state.errorUser=null;
            return {...state}
        }
        case (ActionType.USER_PROFILE_SUCCESS):{
            state.loadingUser=false;
            state.dataUser=action.payload;
            state.errorUser=null;
            return{...state}
        }
        case (ActionType.USER_PROFILE_FAILED):{
            state.loadingUser=false;
            state.dataUser=null;
            state.errorUser=action.payload;
            return{...state}
        }
        // cancel course
        case ActionType.CANCEL_COURSE_REQUEST:{
            state.loadingCancel=true;
            state.dataCancel=null;
            state.errorCancel=null;
            return{...state}
        }
        case ActionType.CANCEL_COURSE_SUCCESS:{
            state.loadingCancel=false;
            state.dataCancel= action.payload;
            state.errorCancel=null;
            return {...state}
        }
        case ActionType.CANCEL_COURSE_FAILED:{
            state.loadingCancel=false;
            state.dataCancel=null;
            state.errorCancel=action.payload;
            return {...state}
        }
        // get keyword
        case ActionType.GET_KEYWORD:{
            state.keyword=action.payload;
            return {...state}
        }
        default: return {...state}
    }
}
export default userProfileReducer;