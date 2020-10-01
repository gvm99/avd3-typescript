import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Usuarios from './Usuarios';
import Eventos from './Eventos';

@Entity('usuarios_eventos_interacao')
class UsuarioEventos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    usuario_id: string;

    @Column()
    evento_id: string;

    @Column()
    interacao: string;

    @ManyToOne(()=>Usuarios)
    @JoinColumn({name:'usuario_id'})
    usuario: Usuarios;

    @ManyToOne(()=>Eventos)
    @JoinColumn({name:'evento_id'})
    evento: Usuarios;
}

export default UsuarioEventos;