import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Post } from '../entity/Post'

const getPost = async (req: Request, res: Response) => {

  const postRepository = AppDataSource.getRepository(Post)

  try {
    const result = await postRepository.find()
    res.json(result)
  } catch (error) {
    res.status(500).json(error)    
  }
}

const getByPostNo = async (req: Request, res: Response) => {
  
  const { postNo } = req.params
  const postRepository = AppDataSource.getRepository(Post)

  try {
    const result = await postRepository.findOneBy({
      postNo: Number(postNo)
    })
    res.json(result)
  } catch (error) {
    res.status(500).json(error)    
  }
}

const savePost = async (req: Request, res: Response) => {

  const { title, description } = req.body
  
  let post = new Post()
  post = {...req.body}

  const postRepository = AppDataSource.getRepository(Post)

  try {
    const result = await postRepository.save(post)
    res.json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const editPost = async (req: Request, res: Response) => {

  const { postNo } = req.body
  
  const postRepository = AppDataSource.getRepository(Post)
  
  try {
    const result = await postRepository.update(postNo, {...req.body})
    res.json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePost = async (req: Request, res: Response) => {

  const { postNo } = req.body
  const postRepository = AppDataSource.getRepository(Post)

  try {
    // remove: 삭제하고자 하는 데이터가 존재하지 않을 경우 실패
    // delete: 값이 존재하는 경우 삭제하고, 존재하지 않을 경우에는 아무일도 일어나지 않음
    const result = await postRepository.delete(postNo)
    res.json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

export default {
  getPost,
  getByPostNo,
  savePost,
  editPost,
  deletePost
}

