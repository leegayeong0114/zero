import { Router } from 'express'
import PostController from '../controllers/PostController'

const router = Router()

router.get('/post', PostController.getPost)
router.get('/post/:postNo', PostController.getByPostNo)

router.post('/post/save', PostController.savePost)
router.put('/post/edit', PostController.editPost)
router.post('/post/delete', PostController.deletePost)

export default router