import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Main: React.FC = () => {

  const {
    authentication,
    authInfo: { isAuth, user },
  } = useContext(AuthContext)

  useEffect(() => {
    authentication()
    console.log(isAuth)
  }, [])
  

  return (
    <div>
      메인 로그인 유무 확인
    </div>
  )
}

export default Main
