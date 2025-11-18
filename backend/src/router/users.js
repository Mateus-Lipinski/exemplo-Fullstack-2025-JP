import express from 'express'
import ControllerUser from '../controller/users.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

// rota do login
router.post('/login', ControllerUser.Login)

//// api/v1
// rotas do usuário
router.get('/user/context', ControllerUser.FindOne)
router.post('/user/', ControllerUser.Create)
router.put('/user/', ControllerUser.Update)
router.delete('/user/', ControllerUser.Delete)

// rotas do administrador
router.get('/users', ControllerUser.FindAll) // pegar todos
router.get('/user/:id', ControllerUser.FindOne) // pegar um
router.post('/user/admin', ControllerUser.Create) // cadastrar um
router.put('/user/:id', ControllerUser.Update) // alterar um
router.delete('/user/:id', ControllerUser.Delete) // deletar um

export default router