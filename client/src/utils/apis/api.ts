import axios, { AxiosInstance } from 'axios'

let accessToken = localStorage.getItem('accessToken')

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000`, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})