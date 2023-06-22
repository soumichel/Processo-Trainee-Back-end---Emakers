import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Biblioteca extends BaseModel {
  // recupera os livros relacionados a biblioteca
  @hasMany(() => Livro)
  public livros: HasMany<typeof Livro>  

  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column()
  public endereco: string

  // Coluna criada
  @column()
  public site: string

  // Coluna criada
  @column()
  public telefone: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
