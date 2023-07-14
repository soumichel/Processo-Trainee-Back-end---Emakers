import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column()
  public titulo: string

  // Coluna criada
  @column()
  public sinopse: string

  // Coluna criada
  @column()
  public nomes_autores: string

  // Coluna criada
  @column()
  public ano_publicacao: number

  // Coluna criada, id referenciando Biblioteca
  @column()
  public bibliotecaId: number

  // Coluna criada, id referenciando Pessoa
  @column()
  public pessoaId: number | null  // pessoaId pode receber tanto valores como number quanto null, opção escolhida para que o método devolverLivro funcione corretamente.

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
