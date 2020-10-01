import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Usuarios from './Usuarios';

@Entity('eventos')
class Eventos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    local: string;

    @Column()
    usuario_criador_id: string;

    @Column()
    foto: string;

    @Column()
    comentario: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=>Usuarios)
    @JoinColumn({name:'usuario_criador_id'})
    usuario_criador: Usuarios
}

export default Eventos;