# 🍕 JK Pizzaria API

## Descrição
A **JK Pizzaria API** é uma aplicação backend desenvolvida em Node.js que permite a gestão de uma pizzaria. Essa API oferece funcionalidades como criar, listar, editar e remover pedidos, pizzas e demais produtos, facilitando o gerenciamento das operações do estabelecimento.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## Funcionalidades
- 🔐 – **Sistema de Autenticação**: Sistema de autenticação utilizando JWT.
- 🛒 **Gerenciamento de Pedidos**: CRUD de pedidos com status e informações de clientes e dos produtos.
- 🍕 **Gestão de Produtos**: Criação e customização de pizzas e demais produtos para preparação dos pedidos.
- 🔗 **Integração com WEB **: Integração plataforma front-end web desenvolvida com react e nextjs.
- 📱 **Integração com APP **: Integração com aplicação mobile desenvolvida com react native para os garçons anotarem os pedidos.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para construir a API.
- **Express.js**: Framework web minimalista e flexível para a construção de APIs.
- **Postgres**: Banco de dados SQL para armazenar as informações de pedidos, de produtos e usuários.
- **Prisma**: Biblioteca para integração com o banco de dados.
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

