import { Router } from 'express'
import { auth } from '../middleware/auth'

import PostRouter from './PostRouter'
import UserRouter from './UserRouter'
import AuthRouter from './AuthRouter'

const router = Router()

router.use(PostRouter)
router.use(UserRouter)
router.use(AuthRouter)

export default router