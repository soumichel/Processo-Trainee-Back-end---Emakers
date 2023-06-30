import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome') // Nome da coluna
      table.string('data_nascimento')
      table.string('sexo')
      table.integer('telefone')
      table.string('endereco')

      // chave estrangeira de Livro
      table.integer('livro_id').unsigned().references('livros.id').onDelete('CASCADE')
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
