import * as ActionType from "./constants";
import api from "../../../Api/api";

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