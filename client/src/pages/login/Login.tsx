import axios from 'axios'
import React, { useContext, useReducer, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { IUser } from '../../types/User'
import { login } from '../../utils/apis/user'
import { toastSuccess, toastWarning } from '../../utils/ToastUtil'

const Login: React.FC = () => {

  const navigate = useNavigate()
  const { authentication } = useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  const submit = async () => {

    const data: IUser = { userId, userPw }

    try {

      setIsSubmitting(true)
      const result = await login(data)

      if(result.data.success) {
        localStorage.setItem('accessToken', result.data.token)
        toastSuccess('로그인 되었습니다.')
        navigate('/')
      } else {
        toastWarning(result.data.msg)
      }
      setIsSubmitting(false)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <h2>로그인</h2>
      </div>
      <div className="justify-content-center ta-center">
        <Stack gap={3} className="col-md-6 mx-auto">
          <input type="text" name="userId" onChange={(e) => setUserId(e.currentTarget.value)} />
          <input type="text" name="userPw" onChange={(e) => setUserPw(e.currentTarget.value)} />
          <Button size="lg" variant="outline-success" onClick={submit} disabled={isSubmitting}>로그인</Button>
          <Link to="/signup">회원가입</Link>
        </Stack>
      </div>
    </>
  )
}

export default Login