import {getRepository} from 'typeorm';
import Eventos from '../models/Eventos';


interface Request {
    nome: string,
    local: string,
    foto: string,
    comentario: string,
    usuario_criador_id: string
}
interface RequestDelete {
    id: string,
    usuario_id: string
}
class EventosController {
    public async store({nome, local,comentario, usuario_criador_id,foto}:Request): Promise<Eventos>{
        const usuariosRepository = getRepository(Eventos);

        const eventos = usuariosRepository.create({nome, local,comentario, usuario_criador_id, foto});
        await usuariosRepository.save(eventos);
        return eventos;
    }

    public async delete({usuario_id, id}:RequestDelete): Promise<void>{
        const usuariosRepository = getRepository(Eventos);

        const verificaUsuario = await usuariosRepository.findOne({where:{id, usuario_criador_id:usuario_id}});

        if (!verificaUsuario){
            throw new Error("Apenas o usuário criador pode excluir o evento")
        }
        await usuariosRepository.delete(id);
    }
    public async list(): Promise<Eventos[]>{
        const usuariosRepository = getRepository(Eventos);

        const eventos = await usuariosRepository.find();
        
        return eventos;
    }
}

export default EventosController;