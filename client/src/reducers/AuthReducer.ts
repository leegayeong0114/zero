import { AuthActionType } from './type'

const { 
  CHECK_AUTH, 
  SIGN_OUT 
} = AuthActionType

interface AuthInfo {
  isAuth: boolean
  authUser: {
    userIdx: string
    userId: string
    userProfileImage: string
  }
}

export type AuthState = AuthInfo

type AuthAction = {
  type: AuthActionType
  payload: AuthInfo
}

export const authReducer = (state: AuthState, action: AuthAction) => {

  const { payload } = action

  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        isAuth: payload.isAuth,
        authUser: payload.authUser
      }
    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
        authUser: {
          userIdx: '',
          userId: '',
          userProfileImage: '/default.png'
        }
      }
    default:
      return state
  }
}