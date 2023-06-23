import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Pessoa extends BaseModel {
  // recupera os livros relacionados a pessoa
  @hasMany(() => Livro)
  public livros: HasMany<typeof Livro>

  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column()
  public nome: string

  // Coluna criada
  @column()
  public data_nascimento: string

  // Coluna criada
  @column()
  public sexo: string

  // Coluna criada
  @column()
  public telefone: number

  // Coluna criada
  @column()
  public endereco: string

  // Coluna criada, id referenciando Livro
  @column()
  public livroId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
