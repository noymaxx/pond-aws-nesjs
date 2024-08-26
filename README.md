# ponderada-nestJs-react-aws

# My Auth App

## Descrição

Este projeto é uma aplicação de autenticação usando NestJS que implementa JWT (JSON Web Tokens) para autenticação e autorização de usuários. A aplicação permite que os usuários façam login, se registrem, obtenham seus dados e editem suas informações. Também está configurada para funcionar com Nginx como um proxy reverso para gerenciar as solicitações do frontend e backend.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações escaláveis do lado do servidor.
- **JWT (JSON Web Tokens)**: Usado para autenticação e autorização de usuários.
- **Prisma**: ORM para gerenciar o banco de dados PostgreSQL.
- **Nginx**: Servidor web usado como proxy reverso para roteamento de solicitações.
- **React com Vite**: Usado para o frontend da aplicação.

## Funcionalidades

1. **Registro de Usuário**: Permite que novos usuários se registrem fornecendo um email e uma senha.
2. **Login de Usuário**: Usuários registrados podem fazer login para obter um token JWT.
3. **Autenticação JWT**: Todas as rotas protegidas requerem um token JWT válido para acesso.
4. **Obter Dados do Usuário Logado**: Usuários autenticados podem obter seus dados.
5. **Editar Dados do Usuário**: Usuários autenticados podem editar suas informações, como email, `firstName` e `lastName`.
