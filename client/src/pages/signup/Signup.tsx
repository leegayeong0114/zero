import React, { useRef, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/User'
import { saveUser } from '../../utils/apis/user'
import { toastSuccess, toastWarning } from '../../utils/ToastUtil'

const Signin: React.FC = () => {

  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  // const [userPwConfirm, setUserPwConfirm] = useState('')

  const submit = async () => {

    const data: IUser = { userId, userPw }

    try {
      setIsSubmitting(true)
      const result = await saveUser(data)
      if(result.data) {
        toastSuccess('가입 성공')
        navigate('/login')
      } else {
        toastWarning('가입 실패')
      }
      setIsSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <h2>회원가입</h2>
      </div>
      <div className="justify-content-center ta-center">
        <Stack gap={3} className="col-md-6 mx-auto">
          <input type="text" name="userId" placeholder="아이디" onChange={(e) => setUserId(e.currentTarget.value)}/>
          <input type="text" name="userPw" placeholder="비밀번호" onChange={(e) => setUserPw(e.currentTarget.value)} />
          <input type="text" name="userPwConfirm" placeholder="비밀번호 확인"/>
          <Button size="lg" className="mt-3" variant="outline-success" onClick={submit} disabled={isSubmitting}>회원가입</Button>
        </Stack>
      </div>
    </>
  )
}

export default Signin