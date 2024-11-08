﻿# Projeto de Serviços Web

## Descrição

Este projeto implementa uma API para gerenciamento de séries, construída com **Node.js** usando **Express** como framework principal de backend, **Sequelize** como ORM (mapeamento objeto-relacional), e **PostgreSQL** como banco de dados relacional. Essa combinação é uma escolha comum para construir APIs RESTful escaláveis e eficientes.

## Tecnologias Utilizadas

- **Express**: Framework minimalista para criação de APIs em Node.js.
- **Sequelize**: ORM que facilita a interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional robusto e amplamente utilizado, conhecido por sua conformidade com SQL e capacidade de suportar queries complexas.

## Arquitetura e Benefícios

A API foi estruturada com base em boas práticas de desenvolvimento de APIs RESTful, o que facilita a manutenção e escalabilidade.

### Comparações e Relações com Ferramentas e Tendências

1. **Framework Backend (Express)**:

   - **Comparação**: Frameworks como **NestJS** oferecem mais estrutura e suporte a TypeScript, mas Express é mais leve e flexível, sendo ideal para microsserviços.
   - **Tendência**: Suporta renderização no servidor, útil para SSR (Server-Side Rendering) em projetos onde SEO e velocidade de carregamento inicial são prioridades.

2. **ORM (Sequelize)**:

   - **Comparação**: **TypeORM** e **Prisma** oferecem funcionalidades adicionais como tipagem avançada e experiência de desenvolvedor aprimorada. No entanto, Sequelize continua popular por sua estabilidade e compatibilidade com vários bancos SQL.
   - **Tendência**: Em uma arquitetura de microsserviços, ORMs podem simplificar a interação com bancos de dados. Para aplicações descentralizadas, outras tecnologias substituiriam o ORM para atender à natureza distribuída.

3. **Banco de Dados (PostgreSQL)**:
   - **Comparação**: Alternativas como **MySQL** e **MongoDB** oferecem diferentes vantagens, como maior flexibilidade de esquema e escalabilidade horizontal. PostgreSQL, no entanto, é confiável para dados relacionais estruturados e consultas complexas.
   - **Tendência**: PostgreSQL funciona bem em microsserviços, mas para aplicações descentralizadas e baseadas em blockchain, bases de dados distribuídas seriam mais apropriadas.

## API e Documentação

A API está estruturada com as seguintes rotas principais:

- **/series**: Rotas para adicionar, listar e atualizar séries.
- **/series/:codigo**: Rotas para buscar e deletar séries por código.

### Documentação com OpenAPI

A documentação da API foi criada no formato OpenAPI (Swagger) para facilitar a visualização e o teste das rotas. Acesse [Swagger](https://swagger.io/specification/) para mais detalhes sobre o padrão.

```yaml
openapi: "3.0.0"
info:
  title: "API de Séries"
  description: "API para gerenciar dados de séries de TV"
  version: "1.0.0"

paths:
  /series:
    get:
      summary: "Recuperar todas as séries"
      responses:
        "200":
          description: "Uma lista de séries"
    post:
      summary: "Criar uma nova série"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Serie"
      responses:
        "201":
          description: "Série criada com sucesso"
  /series/{codigo}:
    get:
      summary: "Recuperar uma série pelo código"
      parameters:
        - in: path
          name: codigo
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: "Detalhes da série"
    delete:
      summary: "Excluir uma série pelo código"
      parameters:
        - in: path
          name: codigo
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: "Série excluída"
components:
  schemas:
    Serie:
      type: object
      properties:
        codigo:
          type: integer
        nome:
          type: string
        descricao:
          type: string
        episodio:
          type: integer
        temporada:
          type: integer
```

## Como Executar

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o banco de dados com suas credenciais PostgreSQL em database.js.
4. Inicie a aplicação: `npm start`.

## Exemplos de Uso

[Exemplos de Uso](https://github.com/Richoland/TrabalhoSW/blob/master/exemplo-de-uso.md)
