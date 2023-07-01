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

  // Rotas de Biblioteca
  Route.resource('/biblioteca', 'BibliotecasController').apiOnly()
  // Rota de cadastro de Livro relacionando-o com Biblioteca
  Route.post('/biblioteca/:bibliotecaId/livro', 'LivrosController.store')

  // TESTE!!!
  // Rota de listar os livros disponíveis em determinada biblioteca
  Route.get('/biblioteca/:id/livrosdisponiveis', 'BibliotecasController.listarLivrosDisponiveis')

  // Rotas de Pessoa
  Route.resource('/pessoa', 'PessoasController').apiOnly()
}).prefix('/api')
