import *as ActionType from "./constants"

const initialState={
    loadingUser: false,
    dataUser: null,
    errorUser: null,

    loadingUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

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
        // update profile
        case ActionType.UPDATE_PROFILE_REQUEST:{
            state.loadingUpdate=true;
            state.dataUpdate=null;
            state.errorUpdate=null;
            return{...state}
        }
        case ActionType.UPDATE_PROFILE_SUCCESS:{
            state.loadingUpdate=false;
            state.dataUpdate=action.payload;
            state.errorUpdate=null;
            return{...state}
        }
        case ActionType.UPDATE_PROFILE_FAILED:{
            state.loadingUpdate= false;
            state.dataUpdate=null;
            state.errorUpdate=action.payload;
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