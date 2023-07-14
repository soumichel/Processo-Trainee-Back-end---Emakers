import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo') // Nome da coluna
      table.string('sinopse') 
      table.string('nomes_autores')
      table.integer('ano_publicacao')

      // chave estrangeira de Biblioteca
      table.integer('biblioteca_id').unsigned().references('bibliotecas.id').onDelete('RESTRICT')

      // chave estrangeira de Pessoa
      table.integer('pessoa_id').unsigned().references('pessoas.id').onDelete('RESTRICT')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
