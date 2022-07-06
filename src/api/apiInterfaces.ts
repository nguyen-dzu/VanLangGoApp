// AUTH
export interface ILogin {
  phone_number: string
}

export interface ISignUp {
  full_name: string
  phone_number: string
}

export interface IVerifyCode {
  phone_number: string
  verification_code: string
}
// USER
export type IGender = 'male' | 'female'

export type IUser = {
  // avatar: string
  // email: string
  // full_name: string
  // phone_number: string
  // referral_code: string
  // reward_points: number
  // sex: IGender
  // balance: number
  // location: IAddress
  // home_address: IAddress
}
// PAGINATION
export type IPagination = {
  page: number
  per_page: number
}