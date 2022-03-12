import * as ActionType from "./constant";
import api from './../../../Api/api';

export const actSignIn = (user,history) => {
    return (dispatch) => {
        dispatch(actSignInRequest())
        api
            .post("QuanLyNguoiDung/DangNhap", user)
            .then((result) => {
                dispatch(actSignInSuccess(result.data))
                alert("Sign In Success!")
                localStorage.setItem("UserClient", JSON.stringify(result.data))
                history.replace("/")
            })
            .catch((error) => {
                dispatch(actSignInFailed(error))
                alert("Sign In Failed!")
            })
    }
}

const actSignInRequest = () => {
    return {
        type: ActionType.AUTHSIGNIN_REQUEST
    }
}

const actSignInSuccess = (data) => {
    return {
        type: ActionType.AUTHSIGNIN_SUCCESS,
        payload: data
    }
}

const actSignInFailed = (error) => {
    return {
        type: ActionType.AUTHSIGNIN_FAILED,
        payload: error
    }
}