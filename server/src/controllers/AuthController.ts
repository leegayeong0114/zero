import { Request, Response } from 'express'

const auth = async (
  req: Request, 
  res: Response,
) => {
  try {
    return console.log(req.body)
  } catch (error) {
    res.status(500).json(error)    
  }
}

export default {
  auth
}


