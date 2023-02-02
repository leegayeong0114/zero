import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Main: React.FC = () => {

  const {
    authentication,
    authInfo: { isAuth, authUser },
  } = useContext(AuthContext)

  useEffect(() => {
    authentication()
  }, [])
  

  return (
    <div>
      메인 로그인 유무 확인
      {authUser.userId}
    </div>
  )
}

export default Main
