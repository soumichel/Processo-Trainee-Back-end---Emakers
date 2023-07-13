import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Biblioteca from 'App/Models/Biblioteca'
import Livro from 'App/Models/Livro'

export default class LivrosController {

    // POST padrão, cadastrando Livro sem se relacionar com Biblioteca
    /*// Método que cadastra um determinado Livro com id, titulo, sinopse, nome dos autores e ano de publicação
    public async store({request, response}: HttpContextContract) {
        const body = request.body()
        const livro = await Livro.create(body)

        response.status(201)

        return {
            message: 'Livro cadastrado com sucesso!',
            data: livro,
        }
    }*/

    // Método que cadastra um determinado Livro com id, titulo, sinopse, nome dos autores e ano de publicação
    // e o relaciona com Biblioteca
    public async store({ request, params, response }: HttpContextContract) {
        const body = request.body()
        const bibliotecaId = params.bibliotecaId

        await Biblioteca.findOrFail(bibliotecaId)

        body.bibliotecaId = bibliotecaId

        const livro = await Livro.create(body)

        response.status(201)

        return {
            message: 'Livro cadastrado com sucesso!',
            data: livro,
        }
    }

    // Método que exibe todos os Livros cadastrados
    public async index() {
        const livro = await Livro.all()

        return {
            data: livro,
        }
    }

    // Método que busca um id e exibe o respectivo Livro relacionado ao id
    public async show({ params }: HttpContextContract) {
        const livro = await Livro.findOrFail(params.id)

        return {
            data: livro,
        }
    }

    // Método que busca um id e deleta o respectivo Livro relacionado ao id
    public async destroy({ params }: HttpContextContract) {
        const livro = await Livro.findOrFail(params.id)

        await livro.delete()

        return {
            message: 'Livro removido com sucesso!',
            data: livro,
        }
    }

    // Método que busca um id e atualiza os dados do respectivo Livro relacionado ao id
    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const livro = await Livro.findOrFail(params.id)

        livro.titulo = body.titulo
        livro.sinopse = body.sinopse
        livro.nomes_autores = body.nomes_autores
        livro.ano_publicacao = body.ano_publicacao

        await livro.save()

        return {
            message: 'Livro atualizado com sucesso!',
            data: livro,
        }
    }

    
    // TESTE!!!
    // Método para transferir um livro de uma biblioteca para outra
    public async transferirLivro({ params, response }: HttpContextContract) {
        const livro = await Livro.findOrFail(params.livroId)
        const biblioteca = await Biblioteca.findOrFail(params.bibliotecaId)


        if (livro.bibliotecaId === biblioteca.id) {
            return response.status(400).json({
                message: 'O livro já está na biblioteca de destino.',
            })
        }

        if (livro.pessoaId) {
            return response.status(400).json({
                message: 'O livro está emprestado e não pode ser transferido.',
            })
        }

        livro.bibliotecaId = biblioteca.id
        await livro.save()

        return response.status(200).json({
            message: 'Livro transferido com sucesso!',
            data: livro,
        })
    }
}
