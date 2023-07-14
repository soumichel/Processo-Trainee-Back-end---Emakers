import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

    // Método que cadastra uma determinada Biblioteca com id, endereço, site e telefone
    public async store({ request, response }: HttpContextContract) {
        const body = request.body()
        const biblioteca = await Biblioteca.create(body)

        return response.status(201).json({
            message: 'Biblioteca cadastrada com sucesso!',
            data: biblioteca,
        })
    }

    // Método que exibe todas as Bibliotecas cadastradas e os livros relacionados a ela
    public async index() {
        const biblioteca = await Biblioteca.query().preload('livros')

        return {
            data: biblioteca,
        }
    }

    // Método que busca um id e exibe a respectiva Biblioteca relacionada ao id
    public async show({ params }: HttpContextContract) {
        const biblioteca = await Biblioteca.findOrFail(params.id)

        // Exibe todos os livros relacionados a Biblioteca
        await biblioteca.load('livros')

        return {
            data: biblioteca,
        }
    }

    // Método que busca um id e deleta a respectiva Biblioteca relacionada ao id
    public async destroy({ params }: HttpContextContract) {
        const biblioteca = await Biblioteca.findOrFail(params.id)

        await biblioteca.delete()

        return {
            message: 'Biblioteca removida com sucesso!',
            data: biblioteca,
        }
    }

    // Método que busca um id e atualiza os dados da respectiva Biblioteca relacionada ao id
    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const biblioteca = await Biblioteca.findOrFail(params.id)

        biblioteca.endereco = body.endereco
        biblioteca.site = body.site
        biblioteca.telefone = body.telefone

        await biblioteca.save()

        return {
            message: 'Biblioteca atualizada com sucesso!',
            data: biblioteca,
        }
    }


    // TESTE!!!
    // Método que lista os livros disponíveis de uma biblioteca
    public async listarLivrosDisponiveis({ params }: HttpContextContract) {
        const biblioteca = await Biblioteca.query().preload('livros').where('id', params.id).firstOrFail()

        return {
            data: biblioteca.livros.filter(livro => !livro.pessoaId), // Filtra os livros que não estão emprestados
        }
    }
}
