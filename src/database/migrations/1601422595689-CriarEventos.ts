import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarEventos1601422595689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios_eventos_interacao",
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary: true,
                        generationStrategy:'uuid',
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'usuario_id',
                        type:'uuid',
                        isNullable: true
                    },
                    {
                        name:'evento_id',
                        type:'uuid',
                        isNullable: true
                    },
                    {
                        name:'interacao',
                        type:'varchar'
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            'usuarios_eventos_interacao',
            new TableForeignKey({
                columnNames: ['evento_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'eventos',
                onDelete:'SET NULL',
                onUpdate:'CASCADE',
            })
        )
        await queryRunner.createForeignKey(
            'usuarios_eventos_interacao',
            new TableForeignKey({
                columnNames: ['usuario_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                onDelete:'SET NULL',
                onUpdate:'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios_eventos_interacao');
    }

}
