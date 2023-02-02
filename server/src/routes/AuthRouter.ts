import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import { auth } from '../middleware/auth'

const router = Router()

router.post('/auth', auth, AuthController.auth)

export default router