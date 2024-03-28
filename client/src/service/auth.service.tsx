import { axiosApi } from '../config'

const PATHS = {
  signup: '/auths/register',
  signin: '/auths/login'
}

export const userSignup = async (payload: any) => await axiosApi.post(PATHS.signup, payload)
export const userSignin = async (payload: any) => await axiosApi.post(PATHS.signin, payload)
