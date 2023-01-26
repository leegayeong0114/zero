import axios from 'axios'

// 토큰 검증 넣기
export const axiosInstance = () => {
  const api = axios.create({
  })
  return api
}