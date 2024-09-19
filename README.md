# 🍕 JK Pizzaria API

## Descrição
A **JK Pizzaria API** é uma aplicação backend desenvolvida em Node.js que permite a gestão de uma pizzaria. Essa API oferece funcionalidades como criar, listar, editar e remover pedidos, pizzas e demais produtos, facilitando o gerenciamento das operações do estabelecimento.

## Funcionalidades
- 🛒 **Gerenciamento de Pedidos**: CRUD de pedidos com status e informações de clientes e dos produtos.
- 🍕 **Gestão de Produtos**: Criação e customização de pizzas e demais produtos para preparação dos pedidos.
- 📦 **Integração com WEB APP**: Integração plataforma front-end weeb e com app utilizado pelos atendentes para realização do pedido.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para construir a API.
- **Express.js**: Framework web minimalista e flexível para a construção de APIs.
- **Postgres**: Banco de dados SQL para armazenar as informações de pedidos, de produtos e usuários.
- **Prisma**: Biblioteca para integração com o banco de dados.
- **Mongoose**: Biblioteca para modelagem de dados e integração com MongoDB.
- **JWT (JSON Web Token)**: Para autenticação e controle de acesso.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## Como rodar o projeto
### Pré-requisitos
- **Node.js** instalado (v14.x ou superior)
- **Postgres** rodando localmente
- **Git** para clonar o repositório

### Passo a passo

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/JOSE0193/jk-pizzaria-api.git
    cd jk-pizzaria-api
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Inicie o servidor**:
    ```bash
    yarn dev || npm run start
    ```
    O servidor rodará em `http://localhost:3333`.

## Rotas para usuários não autenticados

- **POST** `/users`: Rota para criar novo usuário.
- **POST** `/session`: Rota para login.

## Rotas para usuários autenticados
### Category
- **POST** `/category`: Cria uma nova categoria.
- **GET** `/category`: Lista todas as categorias.

### Product
- **POST** `/product`: Cria um novo produto (necessita envio de arquivo).
- **GET** `/product`: Lista todos os produtos.
- **GET** `/category/product`: Lista produtos por categoria.

### Order
- **POST** `/order`: Cria um novo pedido.
- **DELETE** `/order`: Remove um pedido.
- **GET** `/orders`: Lista todos os pedidos.
- **PUT** `/order`: Marca um pedido como concluído.

- **POST** `/order/item`: Adiciona um item ao pedido.
- **DELETE** `/order/item`: Remove um item do pedido.

- **PUT** `/order/send`: Envia um pedido para preparação.
- **GET** `/order/details`: Detalha um pedido específico.

