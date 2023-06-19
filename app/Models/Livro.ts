import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column ()
  public titulo: string

  // Coluna criada
  @column ()
  public sinopse: string

  // Coluna criada
  @column ()
  public nomes_autores: string

  // Coluna criada
  @column ()
  public ano_publicacao: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
