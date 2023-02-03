import { Request, Response } from 'express'
import { IUser } from '../types/User'

const auth = async (
  req: Request, 
  res: Response,
) => {
  try {
    const data: IUser = req.body
    return res.json(data)
  } catch (error) {
    res.status(500).json(error)    
  }
}

export default {
  auth
}


