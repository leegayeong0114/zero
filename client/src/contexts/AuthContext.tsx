import { createContext, useReducer } from 'react'
import { authReducer, AuthState } from '../reducers/AuthReducer'
import { AuthActionType } from '../reducers/type'
import { axiosInstance } from '../utils/apis/api'

const { CHECK_AUTH, SIGN_OUT } = AuthActionType

interface AuthContextDefault {
  authInfo: AuthState
  authentication: () => void
  signOut: () => void
}

export const authInit = {
  isAuth: false,
  user: {
    userIdx: '',
    userId: '',
    userProfileImage: ''
  }
}

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authInit,
  authentication: () => { },
  signOut: () => { }
})

type AxiosReponse = {
  isAuth: boolean
  user: {
    userIdx: string
    userId: string
    userProfileImage: string
  }
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [authInfo, dispatch] = useReducer(authReducer, authInit)

  const authentication = async () => {

    const { data } = await axiosInstance.post<AxiosReponse>(`/api/auth`)
    console.log(data)
    return dispatch({
      type: CHECK_AUTH,
      payload: data
    })
  }

  const signOut = () => {
    return dispatch({
      type: SIGN_OUT,
      payload: authInit
    })
  }

  const AuthContextData = {
    authInfo,
    authentication,
    signOut
  }

  return (
    <AuthContext.Provider value={AuthContextData}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider