import axios from 'axios'
import { axiosApi } from '../config'

const PATHS = {
  signup: '/auths/register',
  signin: '/auths/login',
  // addProduct: '/products',
  // getProduct: '/',
  // getAllProduct: '/auths/register',
  // signin: '/auths/login'
}

export const userSignup = async (payload: any) => await axiosApi.post(PATHS.signup, payload)
export const userSignin = async (payload: any) => await axiosApi.post(PATHS.signin, payload)
// export const getProduct = async (payload: any) => await axios.post(`http://localhost:8003/products${_id}`, payload)
// export const getAllProduct = async (payload: any) => await axios.post(`http://localhost:8003/products`, payload)
// export const addProduct = async (payload: any) => await axiosApi.post(PATHS.addProduct, payload)
// export const userSignin = async (payload: any) => await axiosApi.post(PATHS.signin, payload)
