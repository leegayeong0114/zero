import { AuthActionType } from './type'

const { 
  CHECK_AUTH, 
  SIGN_OUT 
} = AuthActionType

interface AuthInfo {
  authInfo: {
    isAuth: boolean
    authUser: {
      userIdx: string
      userId: string
      userProfileImage: string
    } | null
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
        authInfo: payload.authInfo,
      }
    case SIGN_OUT:
      return {
        ...state,
        authInfo: {
          isAuth: false,
          authUser: null
        }
      }
    default:
      return state
  }
}