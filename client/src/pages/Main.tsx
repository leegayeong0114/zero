import React, { useContext, useEffect } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { toastSuccess } from '../utils/ToastUtil'

const Main: React.FC = () => {

  const navigate = useNavigate()

  const {
    authInfo: { authInfo },
    signOut
  } = useContext(AuthContext)

  useEffect(() => {
    console.log(authInfo.isAuth)
  }, [])

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        메인 로그인 유무 확인
      </div>
      <div className="justify-content-center ta-center">
        <Stack gap={3} className="col-md-6 mx-auto">
        {
          authInfo.isAuth ? 
            <Button size="lg" variant="success" onClick={() => signOut()}>로그아웃</Button>
          :
            <Button size="lg" variant="success" onClick={() => navigate('/login')}>로그인</Button>
        }
        </Stack>
      </div>
    </>
  )
}

export default Main
