import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { AppDataSource } from '../data-source'
import { Post } from '../entity/Post'
import { User } from '../entity/User'
import { IUser } from '../types/User'

const getPost = async (req: Request, res: Response) => {

  const postRepository = AppDataSource.getRepository(Post)

  try {
    const result = await postRepository.find()
    res.json(result)
  } catch (error) {
    res.status(500).json(error)    
  }
}

const getUserByUserId = async (req: Request, res: Response) => {
  
  const { userId }: IUser = req.body
  const userRepository = AppDataSource.getRepository(User)

  try {
    const result = await userRepository.findOneBy({
      userId: userId
    })
    res.json({ isSuccess: true, result })
  } catch (error) {
    res.status(500).json({ isSuccess: false, error })    
  }
}

const saveUser = async (req: Request, res: Response) => {
  
  const { userId, userPw }: IUser = req.body
  
  try {
    const userRepository = AppDataSource.getRepository(User)

    const salt = await bcrypt.genSalt(JWT_SALT)
    const encryptUserPw = await bcrypt.hash(userPw, salt)

    const result = await userRepository.save({ userId, userPw: encryptUserPw })

    res.json(result)
  } catch(error) {
    res.status(500).json(error)
  }
}

// config로 빼야함
const JWT_SALT = 10
const JWT_SECRET_CODE = 'abcdefghijk'

const login = async (
  req: Request,
  res: Response,
) => {

  const { userId, userPw }: IUser = req.body

  try{
    const userRepository = AppDataSource.getRepository(User)
    
    // userId 없음
    const user = await userRepository.findOneBy({ userId: userId})
    if(!user){
      return res.json({success: false, msg: 'userId 없음'})
    }

    // 비밀번호 틀렸음
    const isMatch = await bcrypt.compare(userPw, user.userPw)
    if(!isMatch){
      return res.json({success: false, msg: '비밀번호 틀렸음'})
    }

    const payload = {
      user: {
        userIdx: user.userIdx,
        userId: user.userId,
        userProfileImage: user.userProfileImage,
      }
    }

    jwt.sign(
      payload,
      JWT_SECRET_CODE,
      { expiresIn: '1d' },
      (error, token) => {
        if(error) throw error
        res.status(200).json({ 
          success: true,
          token 
        })
      }
    )
  } catch(error) {
    res.status(500).json(error)
  }
}

export default {
  getUserByUserId,
  saveUser,
  login,
}

