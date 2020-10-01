import {getRepository} from 'typeorm';
import UsuarioEventos from '../models/UsuarioEventos';


interface Request {
    usuario_id: string,
    evento_id: string,
    interacao: string
}
class UsuarioEventosController {
    public async store({usuario_id, evento_id, interacao}:Request): Promise<UsuarioEventos>{
        const usuariosEventoRepository = getRepository(UsuarioEventos);

        const verificaVoto = await usuariosEventoRepository.findOne({where:{usuario_id, evento_id}});

        if(verificaVoto){
            throw new Error("Usuário já votou nesse evento.");
        }

        const eventos = usuariosEventoRepository.create({usuario_id, evento_id, interacao});
        await usuariosEventoRepository.save(eventos);
        return eventos;
    }
}

export default UsuarioEventosController;