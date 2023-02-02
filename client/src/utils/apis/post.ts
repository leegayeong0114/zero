import { axiosInstance } from './api'
import { IPost } from '../../types/Post'
import { API_POST_DELETE, API_POST_GET, API_POST_SAVE } from './path'

export const getPostAll = async (): Promise<IPost[]> => {
  const { data } = await axiosInstance.get(API_POST_GET)
  return data
}

export const getPostOne = async (
  postNo: number
): Promise<IPost> => {
  const { data } = await axiosInstance.get(`${API_POST_GET}/${postNo}`)
  return data
}

export const savePost = async (
  sendData: IPost
): Promise<IPost> => {
  const { data } = await axiosInstance.post(API_POST_SAVE, sendData)
  return data
}

export const deletePost = async (
  postNo: number
): Promise<{
  row: string[],
  affected: number
}> => {
  const { data } = await axiosInstance.post(API_POST_DELETE, { postNo })
  return data
}