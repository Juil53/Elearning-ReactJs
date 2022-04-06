import * as ActionType from "./constants";
import api from "../../../Api/api";

// action fetch user Selector
export const actFetchUserSelector =(codeCourse)=>{
    return (dispatch)=>{
        dispatch(actUserSelectorRequest());
        api
        .post('QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',codeCourse)
        .then((result)=>{
            dispatch(actUserSelectorSuccess(result.data));
            console.log(result);
        })
        .catch((error)=>{
            dispatch(actUserSelectorFailed(error))
        })
    }
}
const actUserSelectorRequest=()=>{
    return{
        type: ActionType.USER_SELECTOR_REQUEST,
    }
}
const actUserSelectorSuccess=(data)=>{
    return{
        type: ActionType.USER_SELECTOR_SUCCESS,
        payload: data,
    }
}
const actUserSelectorFailed=(error)=>{
    return{
        type: ActionType.USER_SELECTOR_FAILED,
        payload:error,
    }
}

// action fetch list user waiting
export const actFetchUserWaiting = (codeCourse)=>{
    return(dispatch)=>{
        dispatch(actUserWaitingRequest());
        api
        .post('QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',codeCourse)
        .then((result)=>{
            dispatch(actUserWaitingSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actUserWaitingFailed(error));
        })
    }
}
const actUserWaitingRequest=()=>{
    return{
        type: ActionType.USER_WAITING_REQUEST,
    }
}
const actUserWaitingSuccess=(data)=>{
    return {
        type: ActionType.USER_WAITING_SUCCESS,
        payload: data,
    }
}
const actUserWaitingFailed=(error)=>{
    return{
        type: ActionType.USER_WAITING_FAILED,
        payload: error,
    }
}