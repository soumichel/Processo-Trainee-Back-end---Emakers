import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // Coluna criada
  @column ()
  public nome: string

  // Coluna criada
  @column ()
  public data_nascimento: string

  // Coluna criada
  @column ()
  public sexo: string

  // Coluna criada
  @column ()
  public telefone: number

  // Coluna criada
  @column ()
  public endereco: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
