import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required('*Field is required!'),
  matKhau: yup.string().required('*Field is required!').min(4).max(8),
  hoTen: yup.string().required('*Field is required!'),
  soDT: yup.string(),
  email:yup.string().required('*Field is required!').email("*Email is invalid!"),
})