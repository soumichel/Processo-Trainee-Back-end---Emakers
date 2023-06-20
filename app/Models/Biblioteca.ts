import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Biblioteca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column ()
  public endereco: string

  // Coluna criada
  @column ()
  public site: string

  // Coluna criada
  @column ()
  public telefone: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
