import { axiosInstance } from './api'
import { API_USER_GET_ALL } from './path'

export const getUserList = async () => {
  const res = await axiosInstance().get(API_USER_GET_ALL)
  return res
}