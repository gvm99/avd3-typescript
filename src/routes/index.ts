import { Router} from 'express'
import usuariosRoutes from './usuarios.routes'
import eventosRoutes from './eventos.routes'
import usuarioeventos from './usuarioeventos.routes'
import sessionsRoutes from './session.routes'
const routes = Router()


routes.use('/usuarios',usuariosRoutes)
routes.use('/eventos',eventosRoutes)
routes.use('/votos',usuarioeventos)
routes.use('/session',sessionsRoutes)


export default routes;