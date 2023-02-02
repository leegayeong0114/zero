import { IUser } from '../../types/User'
import { axiosInstance } from './api'
import { API_USER_GET_ALL } from './path'

export const getUserList = async () => {
  const res = await axiosInstance.get(API_USER_GET_ALL)
  return res
}

export const saveUser = async (
  data: IUser // userId, userPw
) => {
  const res = await axiosInstance.post('/api/user/signup', data)
  return res
}

export const login = async (
  data: IUser
) => {
  const res = await axiosInstance.post('/api/user/login', data)
  return res
}
