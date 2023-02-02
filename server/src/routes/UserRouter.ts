import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

// router.get('/post', PostController.getPost)
// router.get('/post/:postNo', PostController.getByPostNo)

router.post('/user/login', UserController.login)
router.post('/user/signup', UserController.saveUser)

export default router