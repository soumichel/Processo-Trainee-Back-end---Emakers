import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {

    // Método que cadastra uma determinada Pessoa com id, nome, data de nascimento, sexo, telefone e endereço
    public async store({request, response}: HttpContextContract) {
        const body = request.body()
        const pessoa = await Pessoa.create(body)

        response.status(201)

        return {
            message: 'Pessoa cadastrada com sucesso!',
            data: pessoa,
        }
    }
    
    // Método que exibe todas as Pessoas cadastradas
    public async index() {
        const pessoa = await Pessoa.all()

        return {
            data: pessoa,
        }
    }

    // Método que busca um id e exibe a respectiva Pessoa relacionada ao id
    public async show({params}: HttpContextContract) {
        const pessoa = await Pessoa.findOrFail(params.id)

        return {
            data: pessoa,
        }
    }

    // Método que busca um id e deleta a respectiva Pessoa relacionada ao id
    public async destroy({params}: HttpContextContract) {
        const pessoa = await Pessoa.findOrFail(params.id)

        await pessoa.delete()

        return {
            message: 'Pessoa removida com sucesso!',
            data: pessoa,
        }
    }

    // Método que busca um id e atualiza os dados da respectiva Pessoa relacionada ao id
    public async update({params, request}: HttpContextContract) {
        const body = request.body()
        const pessoa = await Pessoa.findOrFail(params.id)

        pessoa.nome = body.nome
        pessoa.data_nascimento = body.data_nascimento
        pessoa.sexo = body.sexo
        pessoa.telefone = body.telefone
        pessoa.endereco = body.endereco

        await pessoa.save()

        return {
            message: 'Pessoa atualizada com sucesso!',
            data: pessoa,
        }
    }
}
