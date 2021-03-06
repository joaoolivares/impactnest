import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsTable1619647377869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'double precision'
                    },
                    {
                        name: 'create_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
