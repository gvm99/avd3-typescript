import { Router} from 'express'
import UsuarioEventosController from '../app/controllers/UsuarioEventosController'

const usuarioEventosRoutes = Router()

usuarioEventosRoutes.post('/', async (request,response)=>{
    try{
        const {usuario_id, evento_id, interacao} = request.body

        const usuarioEventosController= new UsuarioEventosController();
        const voto = await usuarioEventosController.store({usuario_id, evento_id, interacao})

        return response.json(voto)
    }
    catch(erro){
        return response.status(400).json({error:erro.message})
    }
})

export default usuarioEventosRoutes;