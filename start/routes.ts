/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Rotas de Livro
  Route.resource('/livro', 'LivrosController').apiOnly()
  // TESTE!!!
  // Rota de transferir um livro de uma biblioteca para outra
  Route.put('/livro/:livroId/transferir/:bibliotecaId', 'LivrosController.transferirLivro')

  // Rotas de Biblioteca
  Route.resource('/biblioteca', 'BibliotecasController').apiOnly()
  // Rota de cadastro de livro relacionando-o com biblioteca
  Route.post('/biblioteca/:bibliotecaId/livro', 'LivrosController.store')
  // TESTE!!!
  // Rota de listar os livros disponíveis em determinada biblioteca
  Route.get('/biblioteca/:id/livrosdisponiveis', 'BibliotecasController.listarLivrosDisponiveis')

  // Rotas de Pessoa
  Route.resource('/pessoa', 'PessoasController').apiOnly()
  // TESTE!!!
  // Rota de emprestar um livro para uma pessoa
  Route.put('/pessoa/:pessoaId/emprestarlivro/:livroId', 'PessoasController.emprestarLivro')
  // TESTE!!
  // Rota de devolver o livro emprestado
  Route.put('/pessoa/:pessoaId/devolverlivro/:livroId', 'PessoasController.devolverLivro')
}).prefix('/api')
