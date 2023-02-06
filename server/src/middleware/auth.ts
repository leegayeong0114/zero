import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import jwt from 'jsonwebtoken'

export const auth = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {

  try {
    console.log(req.headers.authorization)
    let token = req.headers.authorization?.replace(/^Bearer\s+/, '')

    const authInfo = jwt.verify(token as string, 'abcdefghijk')

    if(!authInfo) throw new Error()
    console.log(authInfo)
    req.body.authInfo = authInfo
    next()
  } catch(error) {
    console.log(error)
    res.status(401).send({ error: '로그인을 해주세요' })
  }
}