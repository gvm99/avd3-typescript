import { Router} from 'express'
import UsuariosController from '../app/controllers/UsuariosController'

const usuariosRoutes = Router()

usuariosRoutes.post('/', async (request,response)=>{
    try{
        const {nome, email,password} = request.body

        const usuariosController= new UsuariosController();
        const user = await usuariosController.store({nome, email,password})

        return response.json(user)
    }
    catch(erro){
        return response.status(400).json({error:erro.message})
    }
})

export default usuariosRoutes;