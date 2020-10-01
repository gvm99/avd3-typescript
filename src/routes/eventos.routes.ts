import { Router, Request} from 'express'
import EventosController from '../app/controllers/EventosController'
import ensureAutenticated from '../middlewares/ensureAutenticated'

const eventosRoutes = Router()
eventosRoutes.use(ensureAutenticated)

eventosRoutes.post('/', async (request,response)=>{
    try{
        const {nome, foto,local,comentario} = request.body

        const eventosController= new EventosController();
        
        const evento = await eventosController.store({nome, local, foto, comentario, usuario_criador_id: request.user.id})

        return response.json(evento)
    }
    catch(erro){
        return response.status(400).json({error:erro.message})
    }
})

eventosRoutes.get('/', async (request,response)=>{
    try{
        const eventosController= new EventosController();
        const eventos = await eventosController.list();

        return response.json(eventos);
    }
    catch(erro){
        return response.status(400).json({error:erro.message})
    }
})

eventosRoutes.post('/delete', async (request,response)=>{
    try{
        const {id, usuario_id} = request.body

        const eventosController= new EventosController();
        await eventosController.delete({usuario_id, id})

        return response.send()
    }
    catch(erro){
        return response.status(400).json({error:erro.message})
    }
})
export default eventosRoutes;