const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type Usuario {
        id: ID!
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        tecnologias: [String!]
    }

    type Produto {
        nome: String!
        valor: Float
        typo: String
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
        usuario (id: Int, nome: String): Usuario
    }
`

const usuarios = [
    {
        id: 123,
        idade: 20,
        salario: 1000.32,
        nome: "Raul",
        ativo: true,
        tecnologias: ['GraphQL', 'NodeJS']
    },
    {
        id: 22,
        idade: 25,
        salario: 100000.32,
        nome: "Raulzeras",
        ativo: true,
        tecnologias: ['GraphQLssss', 'NodeJSsss']
    },
    {
        idade: Math.floor(Math.random() * 100),
        salario: Math.random() * 10000,
        nome: "Random Name",
        ativo: Math.random() < 0.5,
        id: Math.floor(Math.random() * 1000),
        tecnologias: ['Random Tech 1', 'Random Tech 2']
    }
]

const produtos = [
    {
        nome: "Notebook",
        valor: 1000.32,
        typo: "Eletronico"
    },
    {
        nome: "Mouse",
        valor: 100.32,
        typo: "Eletronico"
    }
]

const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        produtos() {
            return produtos
        },
        usuario(_, args) {
            let usuario = usuarios.find(usuario => usuario.id == args.id)
            if (args.id && usuario) return usuario
            else return usuarios.find(usuario => usuario.nome == args.nome)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()