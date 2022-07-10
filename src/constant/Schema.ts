import * as Yup from 'yup'
// import globalData from './GlobalData'

export default {
  password: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .max(20, 'Mật khẩu không được quá 20 ký tự')
    .required('Mật khẩu không được để trống'),

  passwordLogin: Yup.string().required('Mật khẩu không được để trống'),
}
